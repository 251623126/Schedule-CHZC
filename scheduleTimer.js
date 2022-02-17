/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
async function scheduleTimer({
                                 providerRes,
                                 parserRes
                             } = {}) {

    const time = new Date()


    const month = [1, 2, 3, 4, 5, 6, 7]

    const xq = month.includes(time.getMonth()) ? '夏季' : '冬季'


    const map = {
        '冬季': {
            totalWeek: 20, // 总周数：[1, 30]之间的整数
            startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
            startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
            showWeekend: false, // 是否显示周末
            forenoon: 4, // 上午课程节数：[1, 10]之间的整数
            afternoon: 4, // 下午课程节数：[0, 10]之间的整数
            night: 2, // 晚间课程节数：[0, 10]之间的整数
            sections: [{
                section: 1, // 节次：[1, 30]之间的整数
                startTime: '08:00', // 开始时间：参照这个标准格式5位长度字符串
                endTime: '08:40', // 结束时间：同上
            }, {
                section: 2,
                startTime: '08:50',
                endTime: '09:30',
            }, {
                section: 3,
                startTime: '10:10',
                endTime: '10:50',
            }, {
                section: 4,
                startTime: '11:00',
                endTime: '11:40',
            }, {
                section: 5,
                startTime: '14:20',
                endTime: '15:00',
            }, {
                section: 6,
                startTime: '15:10',
                endTime: '15:50',
            }, {
                section: 7,
                startTime: '16:30',
                endTime: '17:10',
            }, {
                section: 8,
                startTime: '17:20',
                endTime: '18:00',
            }, {
                section: 9,
                startTime: '19:00',
                endTime: '19:40',
            }, {
                section: 10,
                startTime: '19:50',
                endTime: '20:30',
            }], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
        },
        '夏季': {
            totalWeek: 20, // 总周数：[1, 30]之间的整数
            startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
            startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
            showWeekend: false, // 是否显示周末
            forenoon: 4, // 上午课程节数：[1, 10]之间的整数
            afternoon: 4, // 下午课程节数：[0, 10]之间的整数
            night: 2, // 晚间课程节数：[0, 10]之间的整数
            sections: [{
                section: 1, // 节次：[1, 30]之间的整数
                startTime: '08:00', // 开始时间：参照这个标准格式5位长度字符串
                endTime: '08:40', // 结束时间：同上
            }, {
                section: 2,
                startTime: '08:50',
                endTime: '09:30',
            }, {
                section: 3,
                startTime: '10:10',
                endTime: '10:50',
            }, {
                section: 4,
                startTime: '11:00',
                endTime: '11:40',
            }, {
                section: 5,
                startTime: '14:40',
                endTime: '15:20',
            }, {
                section: 6,
                startTime: '15:30',
                endTime: '16:10',
            }, {
                section: 7,
                startTime: '16:50',
                endTime: '17:30',
            }, {
                section: 8,
                startTime: '17:40',
                endTime: '18:20',
            }, {
                section: 9,
                startTime: '19:00',
                endTime: '19:40',
            }, {
                section: 10,
                startTime: '19:50',
                endTime: '20:30',
            }], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
        }
    }
    return map[xq]

}


