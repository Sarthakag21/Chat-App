import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import styled from "styled-components";
import { firebaseAuth } from "../utils/FirebaseConfig";
export default function SocialLoginButton() {
  const providers = {
    google: new GoogleAuthProvider,
    facebook: new FacebookAuthProvider,
    github: new GithubAuthProvider
  }
  const firebaseLogin = async(loginType)=>{
    try {
      const provider = providers[loginType]
      const userData = await signInWithPopup(firebaseAuth, provider)
      console.log(userData)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <button type="button" onClick={()=>firebaseLogin("google")}>
        <BsGoogle />
      </button>
      <button type="button" onClick={()=>firebaseLogin("facebook")}>
        <BsFacebook />
      </button>
      <button type="button" onClick={()=>firebaseLogin("github")}>
        <BsGithub />
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  button {
    background-color: transparent;
    border: 0.1rem solid #4e0eff;
    color: white;
    padding: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-item:center;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;
