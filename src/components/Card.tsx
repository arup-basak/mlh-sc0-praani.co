export default function Card(props: {
  title: string;
  cause1: string;
  cause2: string;
  cause3: string;
}) {
  const classes =
    "rounded-[39px] w-56 m-4 relative top-[-69vh] h-72 bg-pink-1 object-cover transition duration-500 cursor-pointer  hover:scale-110 " +
    

  const title = props.title;
  const cause1 = props.cause1;
  const cause2 = props.cause2;
  const cause3 = props.cause3;
  console.log(props.title);
  return (
    <div>
      <div className={classes}>
        <div className="flex flex-col items-center ">
          <h1 className="py-4 text-xl font-semibold text-center">{title}</h1>
          <img
            src="https://img.freepik.com/free-vector/online-doctor-talking-patient_23-2148509191.jpg?w=1380&t=st=1688989272~exp=1688989872~hmac=0216e3b93c0fbcb4b15396e20fcc1749b5dc651455d1afa338b66cb75ab97e21"
            className="w-[180px] h-[200px] bg-red-500 rounded-xl"
          ></img>
        </div>
      </div>
    </div>
  );
}
