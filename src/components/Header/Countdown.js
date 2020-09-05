import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const DaysLeft = styled.h3`
  font-size: ${rhythm(1)};
  font-family: 'Tangerine';
  color: #3c6492;

  @media screen and (min-width: 601px) {
    font-size: ${rhythm(1.5)};
  }
`;

export default function Countdown() {
  const daysLeft = () => {
    const oneDay = 24*60*60*1000;
    const secondDate = new Date("September 3, 2021");
    const firstDate = new Date();

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  }

  return (
    <DaysLeft>{daysLeft()} Days To Go!</DaysLeft>
  )
}
