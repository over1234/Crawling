const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

const getHTML = async(keyword, page) => {
  try {
    return await axios.get(`https://www.inflearn.com/courses?s=${encodeURI(keyword)}&page=${page}`)
  } catch (e) {
    console.log(e)
  }
}

const parsing = async(keyword, page) => {
  const html = await getHTML(keyword, page)

  const $ = cheerio.load(html.data)
  const $courseList = $(".course_card_item")
  const $paginationList = $(".pagination_container")
  const pageList = []

  $paginationList.each((i, node) => {
    pageList.push({
      page: $(node).find(".pagination-list > li > a.pagination-link:ep(1) ").text()
    })
  })

  console.log(pageList)

  // let courses = []
  // $courseList.each((i, elem) => {
  //   const title = $(elem).find(".course_title:eq(0)").text()
  //   const instructor = $(elem).find(".instructor").text()
  //   const rating = $(elem).find(".star_solid").css("width")
  //   const price = $(elem).find(".price").text()
  //   const img = $(elem).find(".card-image > figure > img").attr("src")
  //   courses.push({
  //     title : title,
  //     instructor: instructor,
  //     rating : rating,
  //     price : price,
  //     img : img
  //   })
  // })

  // console.log(courses)
}

parsing("자바스크립트", 1)