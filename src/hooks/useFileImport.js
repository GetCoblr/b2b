import { useStaticQuery, graphql } from 'gatsby';

const useFileImport = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          publicURL
          extension
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  // Map over the queried files and return a map of names to URLs
  const fileMap = {};
  data.allFile.nodes.forEach(node => {
    fileMap[node.name] = node.childImageSharp.gatsbyImageData;
  });

  return fileMap;
};

export default useFileImport;
