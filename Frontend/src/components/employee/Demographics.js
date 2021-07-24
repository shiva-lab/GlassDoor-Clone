import React, { createRef, useEffect, useState } from 'react';
import { currentUser, updateEmployee } from '../../util/fetch/api';

const Demographics = () => {
  const [employee, setEmployee] = useState(null);

  const reloadDemographics = async () => {
    const { user: employee } = await currentUser();
    setEmployee(employee);
  };
  useEffect(() => {
    (async () => {
      await reloadDemographics();
    })();
  }, []);

  const raceRef = createRef();
  const maleRef = createRef();
  const disabilityRef = createRef();
  const veteranStatusRef = createRef();

  const handleOnSave = async () => {
    const d = {
      race: raceRef.current.value,
      isMale: maleRef.current.checked,
      disability: disabilityRef.current.value,
      veteranStatus: veteranStatusRef.current.value,
    };
    await updateEmployee(d);
    await reloadDemographics();
  };

  return (
    <div className="row">
      <div className="col-6">
        {employee && (
          <>
            <div className="inputLabel">Race/Ethnicity</div>
            <input type="text" ref={raceRef} defaultValue={employee.race} />
            <div className="inputLabel">Gender</div>
            <input
              type="radio"
              name="gender"
              defaultChecked={employee.isMale}
              ref={maleRef}
            />
            &nbsp;Male&nbsp;
            <input
              type="radio"
              name="gender"
              defaultChecked={!employee.isMale}
            />
            &nbsp;Female
            <div className="inputLabel">Disability</div>
            <input
              type="text"
              ref={disabilityRef}
              defaultValue={employee.disability}
            />
            <div className="inputLabel">Veteran status</div>
            <input
              type="text"
              ref={veteranStatusRef}
              defaultValue={employee.veteranStatus}
            />
            <div className="mt-2">
              <button className="btn-primary" onClick={handleOnSave}>
                Save
              </button>
            </div>

          </>
        )}

      </div>
      { employee && (
      <div className="col-6">
        <div className="card mb-3">
          <div className="card-header">
            <div className="small inputLabel">Your Saved Information</div>
          </div>
          <div className="card-body">
            <div className="inputLabel">Race/Ethnicity</div>
            <div>{employee.race}</div>
            <div className="inputLabel">Gender</div>
            <div>{employee.isMale ? 'Male' : 'Female'}</div>
            <div className="inputLabel">Disability</div>
            <div>{employee.disability}</div>
            <div className="inputLabel">Veteran Status</div>
            <div>{employee.veteranStatus}</div>
          </div>
        </div>
      </div>
      ) }
    </div>
  );
};

Demographics.propTypes = {};

export default Demographics;
