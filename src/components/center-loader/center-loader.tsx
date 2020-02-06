import React from 'react';
import Loader from 'react-loader-spinner';
import styled from "styled-components";

const CenterLoaderStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
`;


export default function CenterLoader() {

  return (
    <CenterLoaderStyle>
        <Loader
            type="TailSpin"
            color="yellow"
            height={100}
            width={100}
        />
    </CenterLoaderStyle>
  );
}
