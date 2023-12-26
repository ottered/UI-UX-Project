import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";

import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import { useState, useEffect } from 'react';
import { CommentProps } from "./CommentItem/CommentItem";
import CommentItem from "./CommentItem/CommentItem";

const Details = () => {
  var pageKey = "";

  if (typeof window !== 'undefined' && window.localStorage) {
    pageKey = window.location.href;
  }
  
  const [comments, setComments] = useState<CommentProps[]>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const pageKey = window.location.href;
      const localData = localStorage.getItem(pageKey);
      return localData ? JSON.parse(localData) : [];
    }
    return [];
  });
  
  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const pageKey = window.location.href;
      localStorage.setItem(pageKey, JSON.stringify(comments));
    }
  }, [comments]);

  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );
  
  const genresList = filmRetrieve?.data.movie.genres.join(', ');
  
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

  if (isLoading) {
    return <Loader />;
  }

  function commentsList(){
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (userName.trim() !== '' && commentText.trim() !== '') {
        const newComment: CommentProps = {
          id: comments.length + 1,
          userName: userName,
          commentText: commentText,
        };
        setComments([...comments, newComment]);
        setUserName('');
        setCommentText('');
      } else {
        alert('Please enter both your user name and comment before submitting.');
      }
    }

    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    function handleCommentTextChange(event: React.ChangeEvent<HTMLInputElement>) {
      setCommentText(event.target.value);
    }

    const commentItems = comments.map((comment) => (
      <CommentItem
        key = {comment.id}
        id = {comment.id}
        userName = {"Sent by user: " + comment.userName} 
        commentText = {comment.commentText}
        comments={comments}
        setComments={setComments}
      />
      
    ));
    return (
      <Style.CommentSection>
        <Style.CommentForm onSubmit={addComment}>
            <Style.UserInfo>
              <Style.CommentText> Type your username:</Style.CommentText>
              <Style.UserNameInput
                value={userName}
                onChange={handleUserNameChange}
              />
            </Style.UserInfo>
            <Style.CommentInf>
              <Style.NameText> Type your comment:</Style.NameText>
              <Style.UserNameInput
                value={commentText}
                onChange={handleCommentTextChange}
              />
            </Style.CommentInf>  
          <Style.CommentSubmitButton>SUBMIT</Style.CommentSubmitButton>
        </Style.CommentForm >
    
        {commentItems}
      </Style.CommentSection>
    );
  }

  return (
    <Style.Details>
      <Style.Content>

        <Style.Data>
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
            <Style.Buttons>
              <Style.Torrents>{torrentsList}</Style.Torrents>
            </Style.Buttons>
          </Style.Image>

          <Style.Description>
            <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full || '*Description is not provided*'}
            </Style.DescriptionFull>

            <Style.InfoText>
             Year of release: {filmRetrieve?.data.movie.year}
             </Style.InfoText>
             <Style.InfoText>
             Genre(s): {genresList}
             </Style.InfoText>
             <Style.InfoText>
             Star rating: {filmRetrieve?.data.movie.rating} / 10
             </Style.InfoText>
             <Style.InfoText>
             Runtime: {filmRetrieve?.data.movie.runtime} minutes
            </Style.InfoText>
          </Style.Description>
        </Style.Data>
        <Style.UserCommentsText>User comments ({comments.length}):</Style.UserCommentsText>
        <Style.CommentItem>{commentsList()}</Style.CommentItem>     
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
