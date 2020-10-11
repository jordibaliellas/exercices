import axios from "axios";

interface Contributor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  contributions: number;
}

const getContributors = (
  user: string,
  repo: string
): Promise<string[] | undefined> => {
  return axios
    .get<Contributor[]>(
      `https://api.github.com/repos/${user}/${repo}/contributors`,
      {
        headers: { "user-agent": "node.js" },
      }
    )
    .then((response) => response.data.map((contributor) => contributor.login))
    .catch((error) => undefined);
};

getContributors("axios", "axios").then((res) => console.log(res));
getContributors("exogroup", "rpms").then((res) => console.log(res));
