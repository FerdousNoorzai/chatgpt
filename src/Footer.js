import React from "react";

export default function Footer() {
    let year = new Date().getFullYear();
  return (
    <footer className=" bg-dark-blue white pa4 pa5-l black-70 bt b--black-10 serif">
      <div className="mb4-l cf">
        <h1 className="fl w-100 pv0 f6 fw6 ttu tracked mb4">Studios</h1>
        <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l pr2 pr0-ns">
          <h4 className="f5 f4-l fw6">Birmingham</h4>
          <span className="f7 f6-l db white">The Pear Tree Inn,</span>
          <span className="f7 f6-l white">Worcestorshire, England WR3 8SY </span>
          <a
            className="f6 db fw6 pv3 white link dim"
            title="Call SF"
            href="tel:+447546132000"
          >
            +44 754-613-2000
          </a>
        </article>
      </div>
      <div class="dt dt--fixed w-100 blue" >
      <div class="db dtc-ns black-70 tc tr-ns v-mid">
        <a href="https://www.facebook.com/ferdous.noorzai" class="link dim dib mr3 black-70" title="Impossible Labs on Facebook">
          <svg class="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="#FFFFFF">
            <title >facebook icon</title>
            <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
            ></path>
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/ferdousnoorzai/" target="_blank" class="link dim dib black-70">
          <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
            <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
              y1="0" x2="23.9995" y2="48.0005" >
              <stop offset="0" ></stop>
              <stop offset="1" ></stop>
            </linearGradient>
            <path fill="#0072b1 " d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
            ></path>
            <g >
              <g >
                <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
                ></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>

      <article className="cf mb5">
      <div className="mb4 mb0-ns w-100 w-50-l fr">
        <a className="black-70 f4 f3-ns fw6 tl link dim dib pv3 mt2 ml5 mb4 mb0-l white" href="mailto: Ferdousnoorzai@outlook.com" >
          Ferdousnoorzai@outlook.com
        </a>
      </div>
      <div className="mb4 mb0-ns fl w-100 w-50-l" >
        <p className="f4 fw6 mb2 f6 mt0">
          Sign up for our Newsletter!
        </p>
        <input placeholder="Email Address" className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box" />
        <input type="submit" className="input-reset resetB w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray" value="Subscribe" onClick={()=>alert("you have subscribed")}
        />
      </div>
      </article>

      <div className="mb4 mb0-ns fl w-100 w-50-l" >
        <p className="f4 fw6 mb2 f6 mt0">
        Copyright © {year} - FERDOUS NOORZAI
        </p>
        </div>
    </footer>
  );
}
