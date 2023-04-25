const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const fs = require('fs');

var lastPage = 0
var cnt = 1
let courses = []

const getInflean = async(keyword, page) => {
  try {
    return await axios.get(`https://www.inflearn.com/courses?s=${encodeURI(keyword)}&page=${page}`)
  } catch (e) {
    console.log(e)
  }
}

const getFastcampus = async (keyword, page) => {
  try {
    return await axios.get(`https://fastcampus.co.kr/search?keyword=${encodeURI(keyword)}`)
  } catch (e) {
    console.log(e)
  }
}

const parsingI = async(keyword, page) => {
  const html = await getInflean(keyword, cnt)
  const $ = cheerio.load(html.data)
  const $courseList = $(".course_card_item")
  const $paginationList = $(".pagination_container")
  const pageList = []

  $paginationList.each((i, node) => {
    pageList.push({
      page: $(node).find(".pagination-list > li > a.pagination-link ").text()
    })
  })
  page = pageList[0].page
  lastPage = page[page.length - 2] + page[page.length - 1]
  if(Number(lastPage) + 1 == cnt) {
    fs.writeFile(`${keyword}.json`, JSON.stringify(courses), 'utf8', function (err) {
      if (err) console.log(err.message)
    });
    return console.log('done Inflean');
  }
  else {
    $courseList.each((i, elem) => {
      const title = $(elem).find(".course_title:eq(0)").text()
      const instructor = $(elem).find(".instructor").text()
      const rating = $(elem).find(".star_solid").css("width")
      const price = $(elem).find(".price").text()
      const img = $(elem).find(".card-image > figure > img").attr("src")
      courses.push({
        title: title,
        instructor: instructor,
        rating: rating,
        price: price,
        img: img
      })
    })
    cnt++
    return parsingI(keyword, cnt)
  }
}

const parsingF = async (keyword) => {
  const html = await getFastcampus(keyword)
  const $ = cheerio.load(html.data)
  const $cardList = $(".card__container")

  $cardList.each((i, elem) => {
    const title = $(elem).find(".card__text > strong").text()
    console.log(title)
    const content = $(elem).find(".card__text > p").text()
    const img = $(elem).find(".card__image-wrapper > img").attr("src")
    courses.push({
      title: title,
      content : content,
      img: img
    })
  })
  return console.log("done Fastcompus")
}

const keyword = "파이썬"
// parsingI(keyword, 1)
parsingF(keyword)