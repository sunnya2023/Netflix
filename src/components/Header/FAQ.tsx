import styled from "styled-components";

const FaqBox = styled.div`
  padding: 10px 12%;
  text-align: center;
  font-size: 18px;
`;

const FaqTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
`;
const FaqList = styled.ul`
  margin: 60px auto;
  width: 100%;
  max-width: 750px;
`;
const FaqItems = styled.li`
  width: 100%;
  padding: 5px;
  label {
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    background: #303030;
    margin-bottom: 2px;
    cursor: pointer;
    position: relative;

    &::after {
      content: "+";
      font-size: 34px;
      position: absolute;
      right: 20px;
      transition: 0.5s;
    }
  }
  input[type="radio"]:checked + label + div {
    max-height: 600px;
    padding: 30px 20px;
  }
  input[type="radio"]:checked + label::after {
    transform: rotate(135deg);
  }
`;

const FaqInput = styled.input`
  display: none;
`;
const Answer = styled.div`
  background: #303030;
  text-align: left;
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: 0.5s;
`;

function FAQ() {
  return (
    <FaqBox>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqList>
        <FaqItems>
          <FaqInput type="radio" name="accordion" id="first" />
          <label htmlFor="first">What is Netflix?</label>
          <Answer>
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
              <br />
              You can watch as much as you want, whenever you want – all for one
              low monthly price. There's always something new to discover and
              new TV shows and movies are added every week!
            </p>
          </Answer>
        </FaqItems>
        <FaqItems>
          <FaqInput type="radio" name="accordion" id="second" />
          <label htmlFor="second">How much does Netflix cost?</label>
          <Answer>
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              KRW 17,000 to KRW 5,500 a month. No extra costs, no contracts.
            </p>
          </Answer>
        </FaqItems>
        <FaqItems>
          <FaqInput type="radio" name="accordion" id="third" />
          <label htmlFor="third">Where can I watch?</label>
          <Answer>
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
              <br />
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </Answer>
        </FaqItems>
        <FaqItems>
          <FaqInput type="radio" name="accordion" id="fourth" />
          <label htmlFor="fourth">How do I cancel?</label>
          <Answer>
            <p>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </Answer>
        </FaqItems>
        <FaqItems>
          <FaqInput type="radio" name="accordion" id="fifth" />
          <label htmlFor="fifth">What can I watch on Netflix?</label>
          <Answer>
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
              <br />
              Check out some of our content.
            </p>
          </Answer>
        </FaqItems>
        <FaqItems>
          <FaqInput type="radio" name="accordion" id="sixth" />
          <label htmlFor="sixth">Is Netflix good for kids?</label>
          <Answer>
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space.
              <br />
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </p>
          </Answer>
        </FaqItems>
      </FaqList>
    </FaqBox>
  );
}

export default FAQ;
