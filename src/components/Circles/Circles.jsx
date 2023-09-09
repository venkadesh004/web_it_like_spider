import React, { useEffect, useState } from "react";
import "./Circles.css";
import Lottie from "react-lottie";
import defaultOptionsForPages from "../../utils/lottieConfigs";

function Circles({processState, prevProcessState, dates}) {
  const totalCircles = 48;
  const smallCircleRadius = 5;

  useEffect(() => {
    // console.log(processState, prevProcessState);
    if (processState === 1 && prevProcessState === 0) {
      changeRadiusOneByOne1stQuad();
    } else if (processState === 2 && prevProcessState === 1) {
      changeRadiusOneByOne4thQuad();
    } else if (processState === 3 && prevProcessState === 2) {
      changeRadiusOneByOne3rdQuad();
    } else if (processState === 2 && prevProcessState === 3) {
      changeRadiusOneByOneReverse3rdQuad();
    } else if (processState === 1 && prevProcessState === 2) {
      changeRadiusOneByOneReverse4thQuad();
    } else if (processState === 0 && prevProcessState === 1) {
      changeRadiusOneByOneReverse1stQuad();
    }
  }, [prevProcessState, processState]);

  const initialSmallCircles = Array.from(
    { length: totalCircles },
    (_, index) => {
      const angle = (2 * Math.PI * index) / totalCircles - Math.PI / 2;
      const cx = 200 + 150 * Math.cos(angle);
      const cy = 200 + 150 * Math.sin(angle);
      if (index === 0) {
        return { id: index + 1, cx, cy, radius: 8, angle };
      } else {
        return { id: index + 1, cx, cy, radius: smallCircleRadius, angle };
      }
    }
  );

  const [smallCircles, setSmallCircles] = useState(initialSmallCircles);
  const [is1stAnimating, set1stAnimating] = useState(false);
  const [is4thAnimating, set4thAnimating] = useState(false);
  const [is3rdAnimating, set3rdAnimating] = useState(false);

  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [fourthPage, setFourthPage] = useState(false);

  const changeRadiusOneByOne1stQuad = () => {
    set1stAnimating(true);

    setSecondPage(true);
    setFirstPage(false);

    const animationDuration = 500;
    const delayBetweenCircles = animationDuration / 4;

    let index = 1;

    const updateNextCircle = () => {
      if (index < smallCircles.length - 35) {
        const updatedSmallCircles = [...smallCircles];
        if (index === 0 || index === 12 || index === 24 || index === 36) {
          updatedSmallCircles[index] = { ...smallCircles[index], radius: 13 };
        } else {
          updatedSmallCircles[index] = { ...smallCircles[index], radius: 11 };
        }

        setSmallCircles(updatedSmallCircles);

        setTimeout(() => {
          if (index !== 12) {
            updatedSmallCircles[index] = {
              ...smallCircles[index],
              radius: smallCircleRadius,
            };
            setSmallCircles(updatedSmallCircles);
            index++;
            updateNextCircle();
          } else {
            updatedSmallCircles[index] = {
              ...smallCircles[index],
              radius: 8,
            };
            setSmallCircles(updatedSmallCircles);
            index++;
            updateNextCircle();
          }
        }, delayBetweenCircles);
      } else {
        set1stAnimating(false);
      }
    };

    updateNextCircle();
  };

  const changeRadiusOneByOne4thQuad = () => {
    set4thAnimating(true);
    setThirdPage(true);
    setSecondPage(false);

    const animationDuration = 500;
    const delayBetweenCircles = animationDuration / 4;

    let index = 13;

    const updateNextCircle = () => {
      if (index < smallCircles.length - 23) {
        const updatedSmallCircles = [...smallCircles];
        if (index === 0 || index === 12 || index === 24 || index === 36) {
          updatedSmallCircles[index] = { ...smallCircles[index], radius: 13 };
        } else {
          updatedSmallCircles[index] = { ...smallCircles[index], radius: 8 };
        }

        setSmallCircles(updatedSmallCircles);

        setTimeout(() => {
          if (index !== 24) {
            updatedSmallCircles[index] = {
              ...smallCircles[index],
              radius: smallCircleRadius,
            };
            setSmallCircles(updatedSmallCircles);
            index++;
            updateNextCircle();
          } else {
            updatedSmallCircles[index] = {
              ...smallCircles[index],
              radius: 8,
            };
            setSmallCircles(updatedSmallCircles);
            index++;
            updateNextCircle();
          }
        }, delayBetweenCircles);
      } else {
        set4thAnimating(false);
      }
    };

    updateNextCircle();
  };

  const changeRadiusOneByOne3rdQuad = () => {
    set3rdAnimating(true);
    setFourthPage(true);
    setThirdPage(false);

    const animationDuration = 500;
    const delayBetweenCircles = animationDuration / 4;

    let index = 25;

    const updateNextCircle = () => {
      if (index < smallCircles.length - 11) {
        const updatedSmallCircles = [...smallCircles];
        if (index === 0 || index === 12 || index === 24 || index === 36) {
          updatedSmallCircles[index] = { ...smallCircles[index], radius: 13 };
        } else {
          updatedSmallCircles[index] = { ...smallCircles[index], radius: 8 };
        }

        setSmallCircles(updatedSmallCircles);

        setTimeout(() => {
          if (index !== 36) {
            updatedSmallCircles[index] = {
              ...smallCircles[index],
              radius: smallCircleRadius,
            };
            setSmallCircles(updatedSmallCircles);
            index++;
            updateNextCircle();
          } else {
            updatedSmallCircles[index] = {
              ...smallCircles[index],
              radius: 8,
            };
            setSmallCircles(updatedSmallCircles);
            index++;
            updateNextCircle();
          }
        }, delayBetweenCircles);
      } else {
        set3rdAnimating(false);
      }
    };

    updateNextCircle();
  };

  const changeRadiusOneByOneReverse3rdQuad = () => {
    set3rdAnimating(true);
    

    const animationDuration = 500;
    const delayBetweenCircles = animationDuration / 4;

    let index = 36;
    const updateNextCircle = () => {
      if (index < smallCircles.length - 11 && index >= 24) {
        const updatedSmallCircles = [...smallCircles];

        updatedSmallCircles[index] = { ...smallCircles[index], radius: 10 };

        setSmallCircles(updatedSmallCircles);
        // setSmallCircles(initialSmallCircles)

        setTimeout(() => {
          updatedSmallCircles[index] = {
            ...smallCircles[index],
            radius: smallCircleRadius,
          };
          setSmallCircles(updatedSmallCircles);

          index--;
          updateNextCircle();
        }, delayBetweenCircles);
      } else {
        set3rdAnimating(false);
      }
    };

    updateNextCircle();
  };

  const changeRadiusOneByOneReverse4thQuad = () => {
    set4thAnimating(true);

    const animationDuration = 500;
    const delayBetweenCircles = animationDuration / 4;

    let index = 23;

    const updateNextCircle = () => {
      if (index < smallCircles.length - 19 && index >= 12) {
        const updatedSmallCircles = [...smallCircles];

        updatedSmallCircles[index] = { ...smallCircles[index], radius: 10 };

        setSmallCircles(updatedSmallCircles);

        setTimeout(() => {
          updatedSmallCircles[index] = {
            ...smallCircles[index],
            radius: smallCircleRadius,
          };
          setSmallCircles(updatedSmallCircles);

          index--;
          updateNextCircle();
        }, delayBetweenCircles);
      } else {
        set4thAnimating(false);
      }
    };

    updateNextCircle();
  };

  const changeRadiusOneByOneReverse1stQuad = () => {
    set1stAnimating(true);

    const animationDuration = 500;
    const delayBetweenCircles = animationDuration / 4;

    let index = 11;

    const updateNextCircle = () => {
      if (index < smallCircles.length - 9 && index > 0) {
        const updatedSmallCircles = [...smallCircles];

        updatedSmallCircles[index] = { ...smallCircles[index], radius: 10 };

        setSmallCircles(updatedSmallCircles);

        setTimeout(() => {
          updatedSmallCircles[index] = {
            ...smallCircles[index],
            radius: smallCircleRadius,
          };
          setSmallCircles(updatedSmallCircles);

          index--;
          updateNextCircle();
        }, delayBetweenCircles);
      } else {
        set1stAnimating(false);
      }
    };

    updateNextCircle();
  };
  // const changeBG = () =>{
  //   if(firstPage){
  //     return "bg-white"
  //   }else{

  //   }
  // }
  if (firstPage) {
    return (
      <div className="circles">
        <svg width="400" height="400">
          {smallCircles.map((circle) => {
            let className = `circle`;

            if (circle.angle === 0) {
              className += " mainCircle";
            } else if (circle.angle === Math.PI) {
              className += " mainCircle";
            } else if (circle.angle === Math.PI / 2) {
              className += " mainCircle";
            } else if (circle.angle === -Math.PI / 2) {
              className += " mainCircle";
            }

            return (
              <circle
                key={circle.id}
                cx={circle.cx}
                cy={circle.cy}
                r={circle.radius}
                fill="white"
                className={className}
              />
            );
          })}
        </svg>
        <div className="lottie_images">
        <Lottie 
          options={defaultOptionsForPages[1][processState]}
          height={200}
          width={200}
        />
        </div>
        <div className="dates_info">
        <p>Dates</p>
        <div className="dates_div">
          {dates}
        </div>
        </div>
      </div>
    );
  } else if (secondPage) {
    return (
      <div className="circles">
        <svg width="400" height="400">
          {smallCircles.map((circle) => {
            let className = `circle`;

            if (circle.angle === 0) {
              className += " mainCircle";
            } else if (circle.angle === Math.PI) {
              className += " mainCircle";
            } else if (circle.angle === Math.PI / 2) {
              className += " mainCircle";
            } else if (circle.angle === -Math.PI / 2) {
              className += " mainCircle";
            }

            return (
              <circle
                key={circle.id}
                cx={circle.cx}
                cy={circle.cy}
                r={circle.radius}
                fill="white"
                className={className}
              />
            );
          })}
        </svg>
        <div className="lottie_images">
        <Lottie 
          options={defaultOptionsForPages[1][processState]}
          height={200}
          width={200}
        />
        </div>
        <div className="dates_info">
        <p>Dates</p>
        <div className="dates_div">
          {dates}
        </div>
        </div>
      </div>
    );
  } else if (thirdPage) {
    return (
      <div className="circles">
        <svg width="400" height="400">
          {smallCircles.map((circle) => {
            let className = `circle`;

            if (circle.angle === 0) {
              className += " mainCircle";
            } else if (circle.angle === Math.PI) {
              className += " mainCircle";
            } else if (circle.angle === Math.PI / 2) {
              className += " mainCircle";
            } else if (circle.angle === -Math.PI / 2) {
              className += " mainCircle";
            }

            return (
              <circle
                key={circle.id}
                cx={circle.cx}
                cy={circle.cy}
                r={circle.radius}
                fill="white"
                className={className}
              />
            );
          })}
        </svg>
        <div className="lottie_images">
        <Lottie 
          options={defaultOptionsForPages[1][processState]}
          height={200}
          width={200}
        />
        </div>
        <div className="dates_info">
        <p>Dates</p>
        <div className="dates_div">
          {dates}
        </div>
        </div>
      </div>
    );
  }
  else if(fourthPage){
    return (
    
      <div className="circles">
        <svg width="400" height="400">
          {smallCircles.map((circle) => {
            let className = `circle`
  
            if (circle.angle === 0) {
              className += " mainCircle";
            } else if (circle.angle === Math.PI) {
              className += " mainCircle";
            } else if (circle.angle === Math.PI / 2) {
              className += " mainCircle";
            } else if (circle.angle === -Math.PI / 2) {
              className += " mainCircle";
            }
  
            return (
              <circle
                key={circle.id}
                cx={circle.cx}
                cy={circle.cy}
                r={circle.radius}
                fill="white"
                className={className}
              />
            );
          })}
        </svg>
        <div className="lottie_images">
        <Lottie 
          options={defaultOptionsForPages[1][processState]}
          height={200}
          width={200}
        />
        </div>
        <div className="dates_info">
        <p>Dates</p>
        <div className="dates_div">
          {dates}
        </div>
        </div>
      </div>
    );
  }
}

export default Circles;