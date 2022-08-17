import React from 'react'
import "../../../assets/css/sectionTitle.css"

export default function SectionTitle({ icon, title }) {
  return (
      <h3 className="sectionTitle1 gamesW_title">
          <div className="gamesW_TitleImg">
            {icon}
          </div>
          <span>{title}</span>
      </h3>
  )
}