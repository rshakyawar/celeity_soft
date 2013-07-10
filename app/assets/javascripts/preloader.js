if (MobileUtils.isMobile() && MobileUtils.isViewportOpen()) {
    var FixViewPortsExperiment = rendererModel.runningExperiments.FixViewport;
    var FixViewPortsExperimentRunning = FixViewPortsExperiment && (FixViewPortsExperiment === "New");
    if(FixViewPortsExperimentRunning){
        var viewport = document.getElementById('wixMobileViewport');
        var scale = MobileUtils.getZoom();
        viewport.setAttribute('content','width = device-width, initial-scale = ' + scale +', maximum-scale = '+ scale +', minimum-scale = '+ scale);
    }
    document.getElementById("viewer_preloader").style.display = "block";
}
