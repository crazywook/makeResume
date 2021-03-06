import {Get, JsonController, Param, Post} from "routing-controllers"

import {DeveloperHistoryRepository} from "./developerHistory.repository"

const developerHistoryMock = {
  id: 1,
  name: "김성욱",
  achievements: [
    {
      id: 1,
      startedAt: new Date("2016-06"),
      title: "케이지 아이티뱅크 웹개발",
      contents: [
        "C, JAVA, JSP, SPRING",
      ],
    },
    {
      id: 2,
      startedAt: new Date("2017-07"),
      title: "온넷애드 입사",
      contents: [
        "포항공과대학 식당앱",
        "오픈마켓 쇼핑몰",
        "가상화폐거래소 프로토타입 등",
        "Spring, restAPI서버 개발",
      ],
    },
    {
      id: 3,
      startedAt: new Date("2018.04"),
      title: "액션 래빗 입사",
      contents: [
        "Tlendy App"
      ]
    }
  ]
}

@JsonController("/developer-history")
export class DeveloperHistoryController {

  @Get("/")
  "get all developer history"() {

    return DeveloperHistoryRepository.find({}).lean().exec()
  }

  @Get("/:name")
  "get developer history"(@Param("name") name: string) {

    return DeveloperHistoryRepository.findOne({name}).lean().exec()
  }

  @Post("/:name")
  async "create developer history"(
    @Param("name") name: string
  ) {
    console.log("post ", name)
    const result = await new DeveloperHistoryRepository(developerHistoryMock).save({validateBeforeSave: true})
    return result.toJSON()
  }
}
