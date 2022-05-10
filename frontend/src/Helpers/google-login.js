import axios from "axios";


export const getAccessTokenFromCode = async (code) => {
    const { data } = await axios({
      url: `https://oauth2.googleapis.com/token`,
      method: 'post',
      data: {
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        grant_type: 'authorization_code',
        code,
      },
    }); // { access_token, expires_in, token_type, refresh_token }
    return data.access_token;
  };