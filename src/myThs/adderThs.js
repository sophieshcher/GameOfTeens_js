function adderThs() {
    return (
      <div style= {styles}>
          <p style= {stylesP}>“Everyone knows that money can buy shoes but not happiness, food but not appetite, bed but not sleep, medicine but not health, servants but not friends, entertainment but not joy, teachers but not mind” . </p>
          <p style= {stylesP2}>(Socrates)</p>
      </div>
    );
  }



  const styles = {
    borderRadius: "5px",
    backgroundColor: "#FF6B00",
    width: '900px',
    height: "170px",
    padding: "27px",
    margin: "50px auto 50px",
    fontFamily: "Raleway, sans-serif",
    // window.innerWidth > 768 ? '800px' : '400px'
  }
  const stylesP = {
    color: "#fff",
    fontSize: "25px",
    fontWeight: "800",
  }

  const stylesP2 = {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "600",
    textAlign: "right",
    paddingRight: "10px",
    // fontFamily: "Raleway, sans-serif",

  }

  export default adderThs;