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

export const mockPanelsData = [ { id: 1,
    voltage: 151.02483985969758,
    wattage: 409.7426117517415 },
  { id: 2,
    voltage: 154.66994655881288,
    wattage: 975.9269697037898 },
  { id: 3,
    voltage: 139.49216089583172,
    wattage: 351.0018311618634 },
  { id: 4,
    voltage: 118.51820581401608,
    wattage: 515.4357002827578 },
  { id: 5, voltage: 175.1306463000018, wattage: 48.8370834737123 },
  { id: 6,
    voltage: 160.22320152873192,
    wattage: 200.14691845101427 },
  { id: 7,
    voltage: 161.18660508157615,
    wattage: 32.57955093887378 },
  { id: 8,
    voltage: 164.88368687839701,
    wattage: 182.95683319456668 },
  { id: 9,
    voltage: 141.19734971197025,
    wattage: 259.74326070589757 },
  { id: 10,
    voltage: 120.44880844644058,
    wattage: 281.2892480044338 },
  { id: 11,
    voltage: 219.77497662855703,
    wattage: 809.3985629822383 },
  { id: 12, voltage: 136.1773210776854, wattage: 548.604266599635 },
  { id: 13,
    voltage: 152.18533620029123,
    wattage: 87.97281582294046 },
  { id: 14,
    voltage: 197.63634657718785,
    wattage: 795.9787207903748 },
  { id: 15,
    voltage: 135.093737127656,
    wattage: 309.81981440731073 },
  { id: 16,
    voltage: 195.44796071290386,
    wattage: 553.6590715668436 },
  { id: 17,
    voltage: 128.7099696477233,
    wattage: 192.83792589723205 },
  { id: 18,
    voltage: 142.05637150469784,
    wattage: 190.18358785487283 },
  { id: 19,
    voltage: 110.59275283384054,
    wattage: 174.79138433746186 },
  { id: 20,
    voltage: 171.75123121608087,
    wattage: 332.80608625625837 },
  { id: 21,
    voltage: 162.8888269143413,
    wattage: 538.0026404461191 },
  { id: 22,
    voltage: 116.66117925259282,
    wattage: 17.779403901756226 },
  { id: 23,
    voltage: 145.71791276398477,
    wattage: 435.37619969946525 },
  { id: 24,
    voltage: 111.14336096369355,
    wattage: 548.9090152317922 },
  { id: 25,
    voltage: 179.4941226992462,
    wattage: 183.56124196943486 },
  { id: 26,
    voltage: 201.57333703520646,
    wattage: 478.8662056179803 },
  { id: 27,
    voltage: 132.30104660693226,
    wattage: 897.4559713472856 },
  { id: 28,
    voltage: 144.0217691164247,
    wattage: 705.5635233737963 },
  { id: 29,
    voltage: 158.33754973136823,
    wattage: 781.4034832172852 },
  { id: 30,
    voltage: 150.68197040233744,
    wattage: 135.9494231096839 } ]