async function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
  //函数名不要动

  await loadTool('AIScheduleTools')

  if (dom.querySelector('#frmDesk')==null){
    await AIScheduleAlert('请先登录再导入')
    return 'do not continue'
  }

  const frmDesk = dom.querySelector('#frmDesk').contentWindow.document

  const frame_1 = frmDesk.querySelector('#frame_1')

  let opts;
  if(frame_1!=null){
    opts = frame_1.contentWindow.document.querySelector('option')
  }else {
    opts = frmDesk.querySelector('option')
  }


  if(opts==null){
    await AIScheduleAlert('请前往->首页 重新点击导入')
    return 'do not continue'
  }

  const xnxq=opts.value.split('-')

  // 使用Fetch请求教务的接口
  try {
    const url='desk/showLessonScheduleInfosV14.action?xn='+xnxq[0]+'&xq='+xnxq[1]
    return await (await fetch(url)).text().then()
  } catch (error) {
    console.error(error)
    await AIScheduleAlert(error.message)
    return 'do not continue'
  }

}

