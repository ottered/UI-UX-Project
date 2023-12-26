import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { GiAlliedStar } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import * as Style from "./index.styled";

const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Content>
          <Style.TextContainer>
              <Style.Rating>
                <Style.RatingIcon> <GiAlliedStar />&nbsp;{props.rating} / 10 </Style.RatingIcon>
              </Style.Rating>
          </Style.TextContainer>

          <Style.Cards>
            <Style.Card1
              src={
                props.medium_cover_image
                  ? props.medium_cover_image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.medium_cover_image}
            ></Style.Card1>

            <Style.Card2>
              <Style.Name>{props.title}</Style.Name>
              <Style.GenresText>{props.genres[0]}</Style.GenresText>
              <Style.Text>{props.year}</Style.Text>
            </Style.Card2>
          </Style.Cards>

          <Style.Details><FiMenu /> &nbsp;Learn more!</Style.Details>
        </Style.Content>
      </Link>
    </Style.Film>
  );
};

export default Film;
