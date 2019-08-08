import moment from "moment"
import * as React from "react"
import Styled from "styled-components"

import {DeveloperHistoryState} from "../../containers/developerHistory/types"

const DeveloperHistoryLayout = Styled.div`
  display: flex;
  > * {
    flex: 1;
  }
`;

type PropsType = {
  className?: string;
} & Pick<DeveloperHistoryState, "developerHistory">;

export const DeveloperHistory: React.FunctionComponent<PropsType> = ({developerHistory, className = ""}) =>
  <div>
    <h3>개발 연혁</h3>
    <DeveloperHistoryLayout>
      {developerHistory
        && (() => {console.log("developerHistory", developerHistory); return "a"; })()
        && developerHistory.achievements.map(achievement =>
        <Achievement
          key={achievement.id}
          achievement={achievement}
          displayableRowCount={3}
        />
        || "no data"
      )}
    </DeveloperHistoryLayout>
  </div>;

const AchievementLayout = Styled.div`
  ul {
    margin: 0;
    padding: 0.2rem 1rem;
  }
`;

interface AchievementProps
{
  achievement: ArrayElement<NonNullable<DeveloperHistoryState["developerHistory"]>["achievements"]>;
  displayableRowCount: number;
}

const Achievement: React.FunctionComponent<AchievementProps> = ({achievement, displayableRowCount}) => {
  return (
    <AchievementLayout>
      <div>{moment(achievement.startedAt).format("Y-MM-DD")}</div>
      <div>{achievement.title}</div>
      {Array.isArray(achievement.contents)
          ? <ul>
            {achievement.contents.slice(0, displayableRowCount).map((content, i) =>
              <li key={i} >
                {content}
              </li>
            )}
            {/* TODO: create EllipsisRow component}
            {/* {achievement.contents.length > displayableRowCount && <EllipssisRow />} */}
          </ul>
          : achievement.contents
      }
    </AchievementLayout>
  );
};

const a = <>
<h3
              className="">개발 연혁</h3>
          <div
              className="column-list">
            <div
                style={{
                  width: "29.166666666666664%",
                }}
                className="column">
              <p
                className="">2016. 06</p>
              <p
                className="">케이지아이티뱅크 웹개발 이수</p>
              <p
                className="">C, JAVA, JSP, SPRING</p>
            </div>
            <div
                style={{width: "50%"}}
                className="column">
              <p
                className="">2017. 07</p>
              <p
                className="">온넷에드 입사</p>
              <p
                className="">포항공과대학 식당앱, 오픈마켓 쇼핑몰, 가상화폐거래소 프로토타입 등 Spring, restAPI서버 개발</p>
            </div>
            <div
                style={{width: "20.833333333333357%"}}
                className="column">
              <p
                className="">2018.04</p>
              <p
                className="">액션래빗 입사</p>
              <ul
                  className="bulleted-list">
                <li>Tlendy App</li>
              </ul>
            </div>
          </div>
</>;
Achievement.displayName = "Achievement";
