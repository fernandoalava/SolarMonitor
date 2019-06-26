export const getRandom = (min, max)=>{
    return Math.random() * (max - min) + min
}


export const getPanelsInfo = () => {
    let data = []
    for (var i = 1; i <= 30; i++) {
        let v = getRandom(110, 220)
        let w = getRandom(10, 1000)
        data.push(
            {id: i, voltage: v, wattage: w}
        )
     }
     return data

}

export const cloudCoverageDataset = {
    "stats": {
        "timeMin": "2019-06-26T03:00:00",
        "count": 50,
        "offset": 0,
        "nextOffset": 50,
        "timeMax": "2019-07-06T00:00:00"
    },
    "entries": [
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 0.984375
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 0.984375
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 0.875
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 0.828125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 0.953125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-02T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-02T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 0.984375
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-02T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_ttl_cld": 1
            }
        }
    ]
}

export const solarActivityDataset = {
    "stats": {
        "timeMin": "2019-06-26T00:00:00",
        "count": 50,
        "offset": 0,
        "nextOffset": 50,
        "timeMax": "2019-07-06T00:00:00"
    },
    "entries": [
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 59.3917236328125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 21.4122314453125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 286.755126953125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 679.7437744140625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 724.2220458984375
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-26T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 352.3763427734375
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 46.013671875
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 17.8837890625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 224.5897216796875
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 397.6165466308594
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 334.074951171875
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-27T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 213.694580078125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 28.0098876953125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 10.2408447265625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 126.583740234375
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 273.92919921875
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 190.97125244140625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-28T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 83.6197509765625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 16.66314697265625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 3.7764892578125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 48.1197509765625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 296.11865234375
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 325.6871337890625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-29T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 117.681640625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 22.24371337890625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 6.802978515625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 84.2142333984375
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 224.0595703125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 203.0355224609375
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-06-30T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 114.6358642578125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 19.17803955078125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T06:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T09:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 11.3717041015625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T12:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 185.73828125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T15:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 587.9180908203125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T18:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 659.400634765625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-01T21:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 329.2833251953125
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-02T00:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 33.87744140625
            }
        },
        {
            "context": "reference_time_time_lat_lon",
            "classifiers": {
                "reference_time": "2019-06-26T00:00:00.000Z"
            },
            "axes": {
                "reftime": "2019-06-26T00:00:00",
                "time": "2019-07-02T03:00:00",
                "latitude": 49.6875,
                "longitude": -50.625
            },
            "data": {
                "av_swsfcdown": 0
            }
        }
    ]
}