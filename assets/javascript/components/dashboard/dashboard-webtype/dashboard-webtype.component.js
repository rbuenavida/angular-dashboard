var dashboardWebtype = {
    template: `
        <section>
            <div class="section-type {{ classNameFromKey($ctrl.name) }}">
                <p class="heading">{{ labelFromKey($ctrl.name) }}</p>
            </div>
            <div class="panel">
                <div class="panel-heading">
                    TYPES
                </div>
                <div class="panel-body types">
                    <div ng-repeat="(key, value) in $ctrl.data.Types" class="type-entry ng-class: ($index>3) ? 'last-entry' : '';">
                        <div class="details {{ classNameFromKey(key) }}">
                            <p>{{ value }}</p>
                            <p>{{ labelFromKey(key) }}</p>
                        </div>
                    </div>
                </div>
                <div class="panel-footer"></div>                
            </div>
            <div class="panel">
                <div class="panel-heading">
                    SEVERITIES
                </div>
                <div class="panel-body severities">
                    <div class="chart">
                        <svg width="190px" height="190px" viewBox="0 0 42 42" class="donut">
                            <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#214a6b"></circle>
                            <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#214a6b" stroke-width="2"></circle>
                            <!-- high -->
                            <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d54141" stroke-width="2" stroke-dasharray="{{ donutChartValues['High'].dashArray }}" stroke-dashoffset="{{ donutChartValues['High'].dashOffset }}"></circle>
                            <!-- medium -->
                            <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f3ab10" stroke-width="2" stroke-dasharray="{{ donutChartValues['Medium'].dashArray }}" stroke-dashoffset="{{ donutChartValues['Medium'].dashOffset }}"></circle> --> 
                            <!-- low -->
                            <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#41b0d5" stroke-width="2" stroke-dasharray="{{ donutChartValues['Low'].dashArray }}" stroke-dashoffset="{{ donutChartValues['Low'].dashOffset }}"></circle>
                        </svg>                        
                    </div>
                    <div><span class="label">HIGH</span><span class="value">{{ donutChartValues['High'].value }}</span></div>
                    <div><span class="label">MEDIUM</span><span class="value">{{ donutChartValues['Medium'].value }}</span></div>
                    <div><span class="label">LOW</span><span class="value">{{ donutChartValues['Low'].value }}</span></div>
                </div>
            </div>
            <div class="panel">
                <div class="panel-heading">
                    SOURCES (%)
                </div>
                <div class="panel-body sources">
                    <div ng-repeat="(key, value) in $ctrl.data.Sources" class="source-item">
                        <p class="label">{{ labelFromKey(key) }} </p>
                        <div class="progressbar">
                            <!-- obviously this doesn't account for values greater than 100 -->
                            <div style="width:{{ round(value) }}%"></div>
                        </div>
                        <p class="source-value">{{ round(value) }}</p>
                    </div>
                </div>                        
                <div class="panel-footer"></div>                 
            </div>         
        </section>
    `,
    controller: DashboardWebtypeController,
    bindings: {
        data: '<',
        name: '@name'
    }
}

angular.module('dashboard')
    .component('dashboardWebtype', dashboardWebtype);