
export default function Home () {
  const [user, setUser] = useState();
  useEffect(() => {
    api
     .get("/users/fransilva0")
     .then((response) => setUser(response.data))
     .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
     });
     }, []);
  return (
<>
 <div className="card-after">
  <div className="card">
   <img src={user?.avatar_url} />
   <p>{user?.name}</p>
   <p>{user?.login}</p>
   <p>{user?.bio}</p>
  </div>
 </div>

 <style jsx>{`
  * {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
  }
  .card-after {
   background: linear-gradient(to left, #2bf791 0%, #53b0ea 100%);
   width: 290px;
   height: 354px;
   padding: 5px;
   border-radius: 1rem;
  }
  .card {
   background: #000;
   width: 280px;
   height: 344px;
   padding: 10px;
   border-radius: 1rem;
   color: #fff;
   text-align: center;
  }

  img {
   width: 10rem;
   border-radius: 5rem;
   margin-bottom: 0.5rem;
  }

  p {
   margin-bottom: 0.5rem;
  }
 `}</style>
</>
  )
 }