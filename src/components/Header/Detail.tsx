import styled from "styled-components";

const Section = styled.div`
  padding: 50px 12%;
  font-size: 22px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 50px 0;
`;
const RowContent = styled.h2`
  flex-basis: 50%;
  margin-bottom: 20px;
`;
const RowTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const RowText = styled.p``;
// const ImgBox = styled.div`
//   flex-basis: 50%;
//   margin-bottom: 20px;
// `;
const RowImg = styled.img`
  display: block;
  width: 90%;
  margin: auto;
`;

function Detail() {
  return (
    <Section>
      <Row>
        <RowContent>
          <RowTitle>Enjoy on your TV.</RowTitle>
          <RowText>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </RowText>
        </RowContent>
        <RowContent>
          <RowImg src="/feature-1.png" />
        </RowContent>
      </Row>
      <Row>
        <RowContent>
          <RowImg src="/feature-2.png" />
        </RowContent>
        <RowContent>
          <RowTitle>Download your shows to watch offline</RowTitle>
          <RowText>
            Save your favorites easily and always have something to watch.
          </RowText>
        </RowContent>
      </Row>
      <Row>
        <RowContent>
          <RowTitle>Watch everywhere</RowTitle>
          <RowText>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </RowText>
        </RowContent>
        <RowContent>
          <RowImg src="/feature-3.png" />
        </RowContent>
      </Row>
      <Row>
        <RowContent>
          <RowImg src="/feature-4.png" />
        </RowContent>
        <RowContent>
          <RowTitle>Create profiles for kids</RowTitle>
          <RowText>
            Send kids on adventures with their favorite characters in a space
            made just for them — free with your membership.
          </RowText>
        </RowContent>
      </Row>
    </Section>
  );
}

export default Detail;
