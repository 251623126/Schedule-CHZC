
function scheduleHtmlParser(html) {
    const table=$('#lessonSchedule-content>div>ul li')

    let result = []

    let map = {
        '一':1,
        '二':2,
        '三':3,
        '四':4,
        '五':5,
        '六':6,
        '日':7
    };
    for (var i = 0; i < table.length; i++) {

        let re = {sections: [], weeks: []}
        //课程名称
        re.name=table[i].children[1].children[0].data
        //任课教师
        re.teacher=table[i+1].children[1].children[0].data
        // //上课时间


        const w_s=table[i+2].children[1].children[0].data.split(' ')


        const wek=w_s[0].split('周')[0].replace('[','').split('-')



        if (w_s[0].indexOf('单')!==-1){

            for (let a = parseInt(wek[0]); a <= parseInt(wek[1]); a++) {
                if(a%2!==0){
                    re.weeks.push(a)
                }
            }

        }else if(w_s[0].indexOf('双')!==-1){

            for (let a = parseInt(wek[0]); a <= parseInt(wek[1]); a++) {
                if(a%2===0){
                    re.weeks.push(a)
                }
            }
        }else {

            for (let a = parseInt(wek[0]); a <= parseInt(wek[1]!=null?wek[1]:wek[0]); a++) {
                re.weeks.push(a)
            }
        }

        re.day=map[w_s[1].split('[')[0]]
        const sp=w_s[1].split('[')[1].split('节')[0].split('-')
        for (let a = parseInt(sp[0]); a <= parseInt(sp[1]); a++) {
            re.sections.push({section: parseInt(a)})
        }

        const ads=table[i+3].children[1].children[0]
        //上课地点
        const adss=ads!=null?ads.data:''
        re.position=(adss)
        result.push(re)
        i+=3
    }

    return result

}

