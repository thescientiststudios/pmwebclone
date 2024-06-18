import React from "react"
import { StyledTeam } from "./style"

const Team = ({ data }) => {
  return (
    <StyledTeam>
      {data.map(({ fullName, role, image: { url } }, i) => {
        return (
          <div key={i} className="team-member">
            <figure className="hoverable--image team-member__image">
              <img src={url} alt={fullName} />
            </figure>
            <h3 className="team-member__title">{fullName}</h3>
            {role ? <p className="team-member__role">{role}</p> : null}
          </div>
        )
      })}
    </StyledTeam>
  )
}

export default Team
