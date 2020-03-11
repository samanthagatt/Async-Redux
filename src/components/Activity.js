import React from "react";
import { connect } from "react-redux";
import { fetchActivity } from "../activities";
import Loader from "react-loader-spinner";

const Activity = props => {
    return (
        <div>
            <button onClick={props.fetchActivity}>Get Activity</button>
            { !props.activity && !props.isLoading &&
                <h2>Go ahead and fetch a new activity</h2>
            }
            { props.isLoading &&
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            }
            { props.activity && !props.isLoading &&
                <h2>{props.activity.activity}</h2>
            }
        </div>
    );
};

const mapStateToProps = state => (
    {
      isLoading: state.isLoading,
      activity: state.activity,
      error: state.error
    }
  )
  
  export default connect(mapStateToProps, { fetchActivity })(Activity);