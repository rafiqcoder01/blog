import { useState } from "react";
import fbBlack from "../../../assets/icons/fbBlack.svg";

import linkBlack from "../../../assets/icons/linkBlack.svg";
import linkedinBlack from "../../../assets/icons/linkedinBlack.svg";
import mailBlack from "../../../assets/icons/mailBlack.svg";
import twitterBlack from "../../../assets/icons/twitterBlack.svg";
import BlogContent from "../DetailsRight/BlogContent/BlogContent";
import KeyBites from "../DetailsRight/KeyBites/KeyBites";
import TopSection from "../DetailsRight/TopSection/TopSection";
import styles from "./BlogDetailsLeft.module.css";
import { useLocation } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";
const BlogDetailsLeft = ({ details }) => {
  const location = useLocation();
  const [copied,setCopied] = useState(false);
  const url = location.pathname;
    console.log("blogDetailsLeft:", details);
  return (
    <div className={styles.topSectionParent}>
      <div className={styles.topSection}>
        <TopSection data={details} images={details.images} />
      </div>

      <KeyBites data={details.keybites} />

      <div className={styles.lineDiv} />
      <div className={styles.blogContent}>
        <BlogContent content={details?.content} images={details.images} />
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.shareOnSocialMediaParent}>
        <div className={styles.frameGroup}>
          <div className={styles.share}>Share:</div>
          <div className={styles.frameGroup}>
            <LinkedinShareButton url={url} quote={details.title}>
              <img className={styles.frameIcon} alt="" src={linkedinBlack} />
            </LinkedinShareButton>
            <TwitterShareButton url={url} quote={details.title}>
              <img className={styles.frameIcon} alt="" src={twitterBlack} />
            </TwitterShareButton>
            <FacebookShareButton url={url} quote={details.title}>
              <img className={styles.frameIcon} alt="" src={fbBlack} />
            </FacebookShareButton>
            <EmailShareButton url={url} quote={details.title}>
              <img className={styles.frameIcon} alt="" src={mailBlack} />
            </EmailShareButton>
            <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
              <img className={styles.tagFill1Icon} alt="" src={linkBlack} />
            </CopyToClipboard>
          </div>
        </div>
        <div className={styles.exploreMore}>
          <div className={styles.readMore}>READ MORE:</div>
          <div className={styles.frameDiv}>
            <div className={styles.policyWrapper}>
              <b className={styles.policy1}>Policy</b>
            </div>
            <div className={styles.policyWrapper}>
              <b className={styles.policy1}>Social Governance</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsLeft;
