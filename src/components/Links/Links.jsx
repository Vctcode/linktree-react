import React from "react"
// Style
import './Links.css'

export default function Links(props) {

    return (
        <div className="links">
            <a className="link-text" id={props.id} href={props.link}>{props.text}</a>
            <div className="subtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga fugiat omnis similique aut pariatur quisquam dolorum quae! Saepe, non quis, ipsam libero ex velit ut soluta praesentium, aut nulla molestiae.</div>
        </div>
    )
}