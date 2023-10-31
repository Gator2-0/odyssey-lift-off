import React  from "react";
import { Layout, QueryResult } from '../components';
import { useQuery, gql} from '@apollo/client';
import { useParams } from "react-router-dom";

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = ()=>{
  const { trackId = "" } = useParams();
  return <Layout></Layout>;
}

export default Track