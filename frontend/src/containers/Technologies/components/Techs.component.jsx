export function Techs({ technologies }) {
  return (
    <div className="techs__techs">
      <div className="techs__techs">
        <div className="techs__techs-title title--page">Технологии</div>

        <div className="techs__content">
          {technologies.length &&
            technologies.map((i, idx) => (
              <div key={idx} className="techs__content--techs__element">
                <img
                  src={i.img}
                  alt=""
                  className="techs__content--techs__element-img"
                />
                <div className="techs__content--techs__element-name">
                  {i.name}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
