export const fetchLeadList = () => {
  let targetURL = `https://randomuser.me/api/`
  return fetch(targetURL).then(data => {return(data.json())})
}
