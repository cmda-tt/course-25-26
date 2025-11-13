export const fetchData = async function getData() {
  const response = await fetch('https://opendata.rdw.nl/resource/mz4f-59fw.json');
  const data = await response.json();
  return data;
}
