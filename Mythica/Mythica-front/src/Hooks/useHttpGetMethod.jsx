import { useRef } from "react";

export default useHttpGetMethod = (url) => {
  useEffect(() => {
    (async () => {
      const getData = await DnDApi.get(url);

      const data = getData.data.results;

      if (!data) return getData;

      if (!isListOfLinks(data)) return data;

      return searchAndMergeAllLinksContent(data);
    })();

    setRaces(races.sort((a, b) => b.name.toLowerCase() - a.name.toLowerCase()));
  }, []);
};

const isListOfLinks = (data) => {
  data[0].url ? true : false;
};

const searchAndMergeAllLinksContent = (data) => {
  const content = useRef([]);

  data.forEach((contentUrl) => {
    content.current = [...content, DnD.useHttpGetMethod(contentUrl.url)];
  });

  return content;
};
