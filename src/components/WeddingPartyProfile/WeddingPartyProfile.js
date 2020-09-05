import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const ColumnTitle = styled.h3`
  margin-bottom: ${rhythm(2)};
`

const ProfileContianer = styled.div`
  text-align: center;
  margin-top: ${rhythm(2)};
`

const ProfilePhoto = styled.img`
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
`

export default function WeddingPartyProfile({
  name,
  photo,
  role,
  columnTitle,
}) {
  return (
    <ProfileContianer>
      {columnTitle !== null && <ColumnTitle>{columnTitle}</ColumnTitle>}
      <ProfilePhoto src={photo} />
      <h4>{name}</h4>
      {role !== null && <em>{role}</em>}
    </ProfileContianer>
  )
}
