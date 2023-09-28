import React from "react";
import styles from "./terms.module.css";
import terms from "../../helpers/terms";
import { SubscriberSec } from "../index";

const Terms = ({title}) => {
  const tableContent = [
    {
      title: "Acceptance of Terms",
      link: "acceptance",
    },
    {
      title: "Use of content",
      link: "usecontent",
    },
    {
      title: "User contributions",
      link: "contribution",
    },
    {
      title: "Events",
      link: "termevents",
    },
    {
      title: "Third-party Links",
      link: "termthird",
    },
    {
      title: "Disclaimer of Warranties",
      link: "disclaimer",
    },
    {
      title: "Limitation of Liability",
      link: "limitations",
    },
    {
      title: "Changes to Terms",
      link: "changeterms",
    },
    {
      title: "Governing Law",
      link: "governing",
    },
  ];

  return (
    <>
      <div className={styles.policy}>
        <div className={styles.policyHeading}>{title}</div>
        <div className={styles.date}>Last updated: 12 March, 2023</div>
        <div className={styles.main}>
          <div className={styles.right}>
            <div className={styles.subText}>
              Welcome to ESGBites ("the Website"). By accessing and using this
              Website, you agree to comply with and be bound by the following
              terms and conditions. Please read these terms carefully before
              using the Website.
            </div>
            {terms?.map((e, i) => (
              <div className={styles.item} id={e?.id}>
                <div className={styles.title}>{`${i + 1}. ${e?.title}`}</div>
                <div className={styles.text}>
                  {e?.subpoint?.length !== 0
                    ? e?.subpoint?.map((elem, index) => (
                        <div className={styles.subItem}>
                          <div className={styles.subItemTitle}>{`${i + 1}.${
                            index + 1
                          } ${elem?.stitle}`}</div>
                          <div className={styles.subItemText}>
                            {elem?.stext}
                          </div>
                        </div>
                      ))
                    : e?.text}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.left}>
            <div className={styles.leftContainer}>
              <div className={styles.tableHeading}>Table of Contents</div>
              <div className={styles.tableItems}>
                {tableContent.map((e) => (
                  <div className={styles.tableItem}>
                    <a href={`#${e?.link}`}>{e?.title}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      <SubscriberSec />
      </div>
    </>
  );
};

export default Terms;
