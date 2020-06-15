import React from 'react';
import Image from '../../_base/Image';

import designImgPath from '../../../assets/img/competence/design.png'
import visualImgPath from '../../../assets/img/competence/visual.png'
import consultingImgPath from '../../../assets/img/competence/consulting.png'


export default function Competence() {

  return (
    <section className="section-competence">
      <h2 className="title title__competence">our competence</h2>
      <ul className="competences">
          <li className="competences__block competences__block--design">
             <div className="competences__image">
                <Image src={designImgPath} alt={"Interface design"} classes={"competences__pic"}/>
             </div>
             <div className="competences__text">
                Interface design
             </div>
          </li>
          <li className="competences__block competences__block--visual">
             <div className="competences__image">
                <Image src={visualImgPath} alt={"Visualization"} classes={"competences__pic"}/>
             </div>
             <div className="competences__text">
                Visualization and <br /> 3D modeling
             </div>
          </li>
          <li className="competences__block competences__block--consulting">
             <div className="competences__image">
                <Image src={consultingImgPath} alt={"consulting"} classes={"competences__pic"}/>
             </div>
             <div className="competences__text">
                Full cycle of consulting
             </div>
          </li>
        </ul>
    </section>
  )
}