import React, { useState } from "react";

const CVCardInfo = ({ type, item:{ infos, contents, achievements, link, stacks, contacts }}) => {
    
    const [displayContent, setDisplayContent] = useState(false);
    const [displayAchievement, setDisplayAchievement] = useState(false);

    const STACK_CLASS_STANDARD = "cvCard__stacks__p";
    const STACK_WEB = `${STACK_CLASS_STANDARD} ${STACK_CLASS_STANDARD}--web`;
    const STACK_SASS = `${STACK_CLASS_STANDARD} ${STACK_CLASS_STANDARD}--sass`;
    const STACK_FRONT = `${STACK_CLASS_STANDARD} ${STACK_CLASS_STANDARD}--front`;
    const STACK_BACK = `${STACK_CLASS_STANDARD} ${STACK_CLASS_STANDARD}--back`;
    const STACK_CLASS = {
        "HTML": STACK_WEB,
        "CSS": STACK_WEB,
        "Sass": STACK_SASS,
        "JavaScript": STACK_FRONT,
        "React": STACK_FRONT,
        "Python": STACK_BACK,
        "Django": STACK_BACK,
        "Node": STACK_BACK,
        "Express": STACK_BACK,
        "MongoDB": STACK_BACK,
        "Socket.io": STACK_BACK,
    }

    const ICON = {
        Email: "fas fa-envelope",
        LinkedIn: "fab fa-linkedin",
        Github: "fab fa-github-square",
    }

    let contentBtn = contents && (
        <button className="cvCard__info__btn" onClick={()=>setDisplayContent(!displayContent)}>
            {<i className={`cvCard__info__btn__i ${displayContent ? "fas fa-times" : "fas fa-list-ul"}`}></i>}
        </button>
    )

    let achievementBtn = achievements && (
        <button className="cvCard__info__btn" onClick={()=>setDisplayAchievement(!displayAchievement)}>
            {<i className={`cvCard__info__btn__i ${displayAchievement ? "fas fa-times" : "fas fa-trophy"}`}></i>}
        </button>
    )

    let linkBtn = link && (
        <button className="cvCard__info__btn" onClick={()=>window.open(link)}>
            {<i className={`cvCard__info__btn__i fas fa-link`}></i>}
        </button>
    )

    let contactDisplay = contacts && (
        <div className="cvCard__content">
            <ul className="cvCard__content__contact__ul">
                {contacts.map((contact, i) => (
                    <li key={`cvcardinfo-${type}-contact-${i}`} className="cvCard__content__contact__li">
                        <a className="cvCard__content__contact__a" href={contact.link}>
                            <i className={`cvCard__content__contact__i ${ICON[contact.type]}`} />
                            <p className="cvCard__content__contact__p">{contact.link}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )

    let infoDisplay = infos && (
        infos.map((info, i) => (
            <p key={`cvcardinfo-${type}-${i}`} className="cvCard__info__p">
                { info }
            </p>
        ))
    );

    let contentDisplay = contents && (
        <div className="cvCard__content">
            <ul className="cvCard__content__ul">
                { contents.map((content, i) => (
                    <li key={`cvcardinfo-${type}-content-${i}`} className="cvCard__content__li">
                        { content }
                    </li>
                )) }
            </ul>
        </div>
    )

    let achievementDisplay = achievements && (
        <div className="cvCard__content">
            <ul className="cvCard__content__ul">
                { achievements.map((achivement, i) => (
                    <li key={`cvcardinfo-${type}-achivement-${i}`} className="cvCard__content__li">
                        { achivement }
                    </li>
                )) }
            </ul>
        </div>
    )

    let stacksDisplay = stacks && (
        <div className="cvCard__content">
            <div className="cvCard_stacks">
                { stacks.map((stack, i) => <p key={`cvcard-stack-${i}`} className={STACK_CLASS[stack]}>{stack}</p>) }
            </div>
        </div>
    )

    return (
        <div className="cvCard__info">
            { contactDisplay }
            { infoDisplay }
            { contentBtn }
            { displayContent && contentDisplay }
            { achievementBtn }
            { displayAchievement && achievementDisplay }
            { linkBtn }
            { stacksDisplay }
        </div>
    )
}

const CVCard = ({ type, icon, items }) => {
    return (
        <div className="cvCard">
            <div className={`cvCard__icon cvCard__icon--${type}`}>
                <abbr title={type}>
                    <i className={`cvCard__icon__i ${icon}`} />
                </abbr>
            </div>
            {items.map((item, i) => (
                <CVCardInfo
                    key={`cvcard-${i}`}
                    type={type}
                    item={item}
                />
            ))}
        </div>
    )
}

export default CVCard;