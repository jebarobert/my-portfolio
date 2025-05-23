import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaTimeline, FaAward } from "react-icons/fa6";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { FaUserGraduate, FaGem } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { GiDiamondTrophy } from "react-icons/gi";
import { Container, Row, Col } from "react-bootstrap";

import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
  awards,
  certificates,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="4">
            <SlNote size={70} />
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="4">
           <FaTimeline size={70}/>
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="8">
            <table className="table sec_spcaption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="4">
          <VscLightbulbSparkle size={70} />
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="8">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.icon}&nbsp;&nbsp;{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="4">
            <FaUserGraduate size={70} />
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="8">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description1}</p>
                  <p className="service_desc">{data.description2}</p>
                  <p className="service_desc">{data.description3}
                    <ul>
                      <li> { data.description3_1 }</li>
                      <li> { data.description3_2 }</li>
                    </ul>
                  </p>
                </div>
              );
            })}
          </Col>
        </Row>
{/* Code for Awards */}
        <Row className="sec_sp">
          <Col lang="4">
            <GiDiamondTrophy size={70}/>
            <h3 className="color_sec py-4">Awards</h3>
          </Col>
          <Col lg="8">
            {awards.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}&nbsp;&nbsp;<FaGem size={30}/></h5>
                  <p className="service_desc">{data.description1}</p>
                </div>
              );
            })}
          </Col>
        </Row>
{/* Code for Certificates */}
<Row className="sec_sp">
          <Col lang="4">
          <FaAward size={70}/>
          <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="8">
            {certificates.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <li className="service_desc">{data.icon}<a href={data.link}>{data.description1}</a></li>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
