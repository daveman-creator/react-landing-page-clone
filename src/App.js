/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const bodyHeaderStyle = css`
  background-color: #f9f8f4;
  overflow: auto;
`;

const wrapperStyles = css`
  color: #262d2e;
  max-width: 1720px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 30.4px 0px 0px;
  padding: 0px 45.6px 0px 0px;
  letter-spacing: 0.04em;

  a {
    text-decoration: none;
    color: #0a2a30;
  }
  strong {
    margin-left: 20px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font: 20px;
  }

  img {
    display: inline-block;
    max-width: 5vw;
    vertical-align: middle;
    border: 0;
    margin-left: 30px;
  }

  hr {
    grid-column-gap: 3em;
    justify-content: space-between;
    box-sizing: border-box;
    line-height: 1.6;
    font-weight: 300;
    letter-spacing: 0em;
    color: #0a2a30;
    background: #adaba3;
  }
`;

const navigationMenuStyles = css`
  list-style-type: none;
  display: flex;
  grid-column-gap: 2.75em;
  box-sizing: border-box;
  font-size: 20px;
  margin: 0px 2.5px;
  padding: 16px 0px;
`;
const buttonGenericStyles = css`
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  line-height: 20px;
  border-radius: 3em;
  padding: 16px 24px;
`;

const mainSectionStyles = css`
  background-color: #f9f8f4;
  padding-right: 6em;
  padding-left: 6em;
  flex-direction: column;
  display: flex;
  grid-row-gap: 2em;
  padding-bottom: 180px;
`;

const wrapperMainStyles = css`
  margin-top: 50px;

  a {
    text-decoration: none;
  }
`;

const mainSectionHeaderStyle = css`
  color: #b9a889;
  font: 69.92px;
  letter-spacing: -0.6992px;
  font-weight: 500;
  display: block;
  font-family: Circularxxweb, sans-serif;
  font-size: 3.75rem;
  margin-left: 40px;

  span {
    color: #0a2a30;
  }
`;

const mainSectionParagraphStyle = css`
  color: #0a2a30;
  font: 30px;
  font-size: 30px;
  margin-left: 40px;
`;
const mainButtonStyles = css`
  color: #ffffff;
  background: #0a2a30;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  line-height: 20px;
  border-radius: 3em;
  padding: 18px 42px;
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left: 40px;
`;

const mainAlternativeStyle = css`
  color: #9c9b93;
  font-size: 20px;
  letter-spacing: 1px;
  margin-left: 40px;
`;

const mainSection2Styles = css`
  background-color: #0d1e21;
`;

const wrapperMainStyles2 = css`
  margin-bottom: 150px;
  padding-top: 11em;
  padding-bottom: 8em;
  h2 {
    color: white;
    font-size: 45px;
    margin-top: -10px;
    margin-left: 120px;
  }

  span {
    color: #b99960;
    margin-left: 17px;
  }
`;

const mainSectionParagraphStyle2 = css`
  color: #e5e4df;
  font-size: 24px;
  max-width: 33em;
  letter-spacing: 0.05em;
  display: block;
  margin-top: -20px;
  margin-left: 120px;
`;

const header3Styles = css`
  color: #ffffff;
  font-size: 27.1px;
  margin-left: 120px;
`;

const buttonStyles = css`
  color: #ffffff;

  a {
    border-radius: 2em;
    background: black;
    box-sizing: border-box;
    font-size: strong 30px;
    font-weight: 400;
    letter-spacing: 0.8px;
    line-height: 50px;
    text-decoration: none;
    color: #ffffff;
    margin-left: 70px;
    margin-right: 70px;
    display: flex;
    padding: 1.5em 3em 1em;
    justify-content: space-between;
  }
`;

const latestWorkStyles = css`
  padding-top: 4em;
  padding-bottom: 1em;
  color: white;
  margin-left: 120px;
  font-size: 60px;
`;

const latestImageStyles = css`
  img {
    border-radius: 30px;
    margin-left: 90px;
    width: 1700px;
    height: 900px;
  }
`;
const clientsStyles = css`
  padding-top: 5em;
  padding-bottom: 0.5em;
  font-size: 2.25em;
  line-height: 1.33;
  color: #fff;
  margin-left: 120px;
  margin-bottom: -15px;
`;

const cardStyles = css`
  display: flex;
  flex-wrap: wrap;

  min-width: 100vw;

  p {
    display: flex;
    flex-wrap: wrap;
    border-radius: 18px;
    box-sizing: border-box;
    padding: 23.4667px 35.2px;
    margin-right: 0px;
    background: #313c3d;
    font-size: strong 80px;
    font-weight: 400;
    letter-spacing: 0.3px;
    line-height: 35px;
    text-decoration: none;
    color: #ffffff;
    margin-left: 70px;
    width: 390px;
    height: 510px;
  }

  img {
    border-radius: 30px;
    width: 60px;
    margin-bottom: 60px;
  }
`;

const niceStyles = css`
  padding-top: 136px;
  padding-bottom: 96px;
  margin-left: 120px;

  h5 {
    font-size: 3.75em;
    color: #ffffff;
    font-weight: 500;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  p {
    max-width: 35em;
    color: #e5e4df;
    letter-spacing: 0.05em;
    font-size: 30px;
  }

  > strong {
    color: #ffffff;
  }
`;

const imageStyles = css`
  display: flex;
  justify-content: center;
  vertical-align: middle;

  max-height: 100%;

  img {
    overflow-clip-margin: content-box;
    width: 100%;
    height: 69.75em;
    margin-left: 1000px;
    margin-top: -880px;
    box-sizing: border-box;
    padding: 180px;
  }
`;

function App() {
  return (
    <>
      <header css={bodyHeaderStyle}>
        <div css={wrapperStyles}>
          <div>
            <a href="/#">
              <img
                src="https://uploads-ssl.webflow.com/5c5c83856efacb1a6810474b/6312161622bfa28c6a937aab_avatar-bubble.png"
                alt="Sanne Wijbenga"
              />
            </a>
            <a href="/#">
              <strong>Sanne Wijbenga</strong>
            </a>
          </div>

          <div>
            <hr />
          </div>
          <div>
            <nav>
              <ul css={navigationMenuStyles}>
                <li>
                  <a href="/#">What I do</a>
                </li>
                <li>
                  <a href="/#">Work</a>
                </li>
                <li>
                  <a href="/#">About</a>
                </li>
                <li>
                  <a href="/#">Process</a>
                </li>
              </ul>
            </nav>
          </div>
          <button css={buttonGenericStyles}>
            <a href="/#">Let's chat</a>
          </button>
        </div>
      </header>
      <main>
        <section css={mainSectionStyles}>
          <div css={wrapperMainStyles}>
            <hi css={mainSectionHeaderStyle}>
              Hi, I’m Sanne,
              <br />
              <span>
                I help early-stage startups design products that work.
              </span>
            </hi>
            <p css={mainSectionParagraphStyle}>
              I have <strong>20 years of experience</strong> and design
              high-quality digital products that your clients will love and let
              your business thrive.
            </p>
            <div>
              <a href="/#" css={mainButtonStyles}>
                Let's chat
              </a>
              <a href="/#" css={mainAlternativeStyle}>
                or find out more (image.svg)
              </a>
            </div>
          </div>
        </section>
        <section css={mainSection2Styles}>
          <div css={wrapperMainStyles2}>
            <h2>
              I help startups
              <span>create a first MVP</span>
            </h2>
            <p2 css={mainSectionParagraphStyle2}>
              If you’re a startup looking for a designer with a broad skill set
              from concept and strategy to design and prototyping, get in touch.
            </p2>
            <h3 css={header3Styles}>What I can do for you</h3>
            <div css={buttonStyles}>
              <a href="/#">Product Discovery</a>
              <br />
              <a href="/#">Product Design</a>
              <br />
              <a href="/#">Product Leadership</a>
            </div>
            <br />

            <div css={latestWorkStyles}>Latest work</div>
            <div css={latestImageStyles}>
              <a href="/#">
                <img
                  src="https://uploads-ssl.webflow.com/5c5c83856efacb1a6810474b/62c53ee25f116e42dccf14b3_cloom-tablet-p-800.png"
                  alt=""
                />
              </a>
            </div>
            <h4 css={clientsStyles}>What clients say about me</h4>
            <div css={cardStyles}>
              <div>
                <p>
                  “ Sanne always tries to get us the most value out of the
                  available time and budget. The result is always on point! He
                  quickly understands the challenges we are facing, and the
                  designed solutions take the bigger picture and possible next
                  steps into account. Since working with Sanne, support
                  questions around our interface were cut in half, and time and
                  costs for validating new product ideas lowered. Our
                  collaboration over the last two years has been very
                  uncomplicated, trusting, pleasant, and productive. I
                  definitely recommend working with Sanne
                </p>
                {/* <div>
                  <img
                    src="https://uploads-ssl.webflow.com/5c5c83856efacb1a6810474b/62cd97e6c505f201850b84d0_luisa-bunzel.png"
                    alt=""
                  />
                </div> */}
              </div>
              <div>
                <p>
                  “ We worked with Sanne from the first experiment all the way
                  to the launch of our first MVP. He is conceptual and
                  strategical strong but can also switch to hands-on design.
                  This created flexibility and allowed us to move forward
                  quickly. Sanne works fast, understands quickly, and is fun to
                  work with. He created processes and structures that really
                  helped clarify what to build next and made it possible to
                  build up the initial design and development team quickly.
                  Highly recommended!”
                </p>
              </div>
              <br />
              <br />
              <div>
                <p>
                  “ The beauty of working with Sanne is a combination of three
                  things. First his deep experience as a product designer and
                  user experience specialist. Second, his understanding and
                  adaptability to a startup’s (sometimes slightly chaotic)
                  processes and unique setups. Lastly, his
                  no-bullshit-and-always-respectfully-telling-you-the-truth way
                  of working together. So don’t think twice about it if he has
                  the availability to work with you.”
                </p>
              </div>

              <div>
                <p>
                  “ Sanne usually immediately has an idea of how something can
                  be realised, mainly supported by his web design experience. I
                  especially like his pragmatic way of approaching things. His
                  designs look good and consider usability and the customer's
                  point of view. Furthermore, Sanne thinks about possible costs
                  that may arise during programming. Working with Sanne is a lot
                  of fun; his good mood and positive forward thinking are
                  contagious. I can definitely recommend Sanne and would work
                  with him again, which we already do.”
                </p>
              </div>
            </div>
            <div>
              <img src="companylogo.svg" alt="" />
            </div>
            <div css={niceStyles}>
              <h5>Nice to meet you</h5>
              <div>
                <p>
                  I am Sanne Wijbenga, Dutch designer and creative director with
                  <strong> 20 years of experience.</strong> For over a decade, I
                  worked at agencies in The Netherlands and Germany, creating
                  award-winning work for a broad range of clients across
                  industries.
                </p>
                <p>
                  <strong>
                    I love working with decision-makers on the intersection of
                    design, strategy, and business.
                  </strong>{' '}
                  I believe this is where design can have the biggest impact.
                </p>
                <p>
                  In 2018 I started my independent design practice using my
                  experience to help early-stage startups create high-quality
                  products that customers love and let businesses thrive.
                </p>
                <p>
                  I'm based in Munich and collaborate with clients across
                  Europe.
                </p>
              </div>
              <div css={imageStyles}>
                <img
                  src="	https://uploads-ssl.webflow.com/5c5c83856efacb1a6810474b/6310e84338f0b3584bd8a0a1_Sanne-Wijbenga.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
