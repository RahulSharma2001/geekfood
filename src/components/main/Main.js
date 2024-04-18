import React from "react";
import "./style.css";
import Card from "../card/Card";

const Main = () => {
  return (
    <div className="hero-section">
      <div class="upper-container">
        <div className="left-side">
          <img
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="hero"
          />
        </div>
        <div className="right-side">
          <div className="right-inner">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <button className="btn">Get in Touch</button>
          </div>
        </div>
      </div>
      <div className="lower-container">
        <Card info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis." />
        <Card info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores." />
        <Card info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt." />
        <Card info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." />
        <Card info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" />
        <Card info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima." />
      </div>
    </div>
  );
};

export default Main;
