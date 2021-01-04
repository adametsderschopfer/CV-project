export function Skills({ skills }) {
  return (
    <div className="techs__skills">
      <div className="techs-title title--page">Умения</div>

      <div className="techs__content techs__skills-content">
        {skills.length &&
          skills.map((i, idx) => (
            <div key={idx} className="techs__content--skills__element">
              <div className="techs__content--skills__element-img">
                <img src={i.img} alt="" />
              </div>

              <div className="techs__content--skills__element-texts">
                <div>
                  <div className="techs__content--skills__element-texts_title">
                    Название: <span>{i.name}</span>
                  </div>
                  <div className="techs__content--skills__element-texts_title">
                    Умение: <span>{i.skillPercent}</span>%
                  </div>
                </div>
                <div className="techs__content--skills__element-texts_percent-bar">
                  <span
                    style={{
                      width: `calc(${i.skillPercent || 50}% - 10px)`,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
