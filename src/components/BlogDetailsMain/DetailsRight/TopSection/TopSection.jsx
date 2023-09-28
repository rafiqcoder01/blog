import fbBlack from "../../../../assets/icons/fbBlack.svg";
import styles from "./TopSection.module.css";

import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import linkBlack from "../../../../assets/icons/linkBlack.svg";
import linkedinBlack from "../../../../assets/icons/linkedinBlack.svg";
import mailBlack from "../../../../assets/icons/mailBlack.svg";
import tag from "../../../../assets/icons/tag.svg";
import twitterBlack from "../../../../assets/icons/twitterBlack.svg";
import author from "../../../../assets/images/author.jpg";
import time from "../../../../assets/images/time.svg";
import { Base_url } from "../../../../utils/utils";
const TopSection = ({ data, images, duration }) => {
  const location = useLocation();
  const url = location.pathname;
  const [copied, setCopied] = useState(false);
  console.log("topsection", data);
  return (
    <div className={styles.topSection}>
      <div className={styles.tags}>
        <img className={styles.tagFill1Icon} alt="" src={tag} />

        {data?.tags.map((item) => (
          <li className={styles.policy} key={item.id}>
            {item.tag}
          </li>
        ))}
      </div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.authorandshare}>
        <div className={styles.authorarea}>
          <img className={styles.authorareaChild} alt="" src={`${Base_url}${data.profile_image}`} />
          <div className={styles.authorcontent}>
            <div className={styles.author}>{data.publisher_name}</div>
            <div className={styles.frameParent}>
              <div className={styles.edit2Parent}>
                <div className={styles.minRead}>{data.date_posted?.slice(0,10)}</div>
              </div>
              <div className={styles.edit2Parent}>
                <img
                  className={styles.timerSvgrepoCom2Icon1}
                  alt=""
                  src={time}
                />
                <div className={styles.minRead}>{data.duration}-min read</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialshare}>
          <div className={styles.share}>Share:</div>
          <div className={styles.socialicons}>
            <LinkedinShareButton url={url} quote={data.title}>
              <img className={styles.frameIcon} alt="" src={linkedinBlack} />
            </LinkedinShareButton>
            <TwitterShareButton url={url} quote={data.title}>
              <img className={styles.frameIcon} alt="" src={twitterBlack} />
            </TwitterShareButton>
            <FacebookShareButton url={url} quote={data.title}>
              <img className={styles.frameIcon} alt="" src={fbBlack} />
            </FacebookShareButton>
            <EmailShareButton url={url} quote={data.title}>
              <img className={styles.frameIcon} alt="" src={mailBlack} />
            </EmailShareButton>
            <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
              <img className={styles.tagFill1Icon} alt="" src={linkBlack} />
            </CopyToClipboard>
          </div>
        </div>
      </div>

      <div className={styles.thumbnail}>
        <img
          className={styles.pexelsPixabay4148371Icon}
          alt=""
          src={`${Base_url}${images[0]?.image}`}
        />
        <i className={styles.sarahWilliams}>
          Image Courtesy: Pexels @ Malcolm Gladwell
        </i>
      </div>
    </div>
  );
};

export default TopSection;
