crs = window.crs || {};


crs.CompanyCreation = function() {

    $(".header .tabs-list .tab").click(function() {
        var tabId = $(this).attr("id");
        $(".header .tabs-list .tab").removeClass("active-tab");
        $(this).addClass("active-tab");

        $(".page-container .tabs-content > div").hide();
        $(".page-container .tabs-content div[class='" + tabId + "']").show();
        if (tabId == "tabBranch") {
            loadBranchDetails();
        } else if (tabId == "tabMac") {
            loadMacDetails()
        } else if (tabId == "tabMaven") {
            loadMavenDetails()
        } else if (tabId == "tabChartWithComp") {
            loadChartWithComp()
        } else if (tabId == "tabChartFromComp") {
            loadChartFromComp()
        }
    });

    crs.CompanyCreation.json_data = [{
            "id": "1",
            "SRN": "01",
            "CompID": "1002",
            "CompanyName": "Maven Tech Services Pvt. Ltd. ",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "GMname": "Krishna Pandey",
            "RMname": "Krishna Pandey",
            "AMname": "Krishna Pandey",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Active",
            "Action": ""
        }, {
            "id": "2",
            "SRN": "02",
            "CompID": "1003",
            "CompanyName": "Maven Tech Services Pvt. Ltd. ",
            "State": "Gujarat",
            "City": "Pune",
            "GMname": "Krishna Pandey",
            "RMname": "Krishna Pandey",
            "AMname": "Krishna Pandey",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "3",
            "SRN": "",
            "CompID": "1004",
            "CompanyName": "Maven Tech Services Pvt Ltd. ",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "GMname": "Krishna Pandey",
            "RMname": "Krishna Pandey",
            "AMname": "Krishna Pandey",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Inactive",
            "Action": ""
        },
        {
            "id": "4",
            "SRN": "",
            "CompID": "1001",
            "CompanyName": "Maven Tech Services Pvt Ltd. ",
            "State": "Maharashtra",
            "City": "Ahmedabadss",
            "GMname": "Krishna Pandeyy",
            "RMname": "Krishna Pandeyy",
            "AMname": "Krishna Pandeyy",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Inactive",
            "Action": ""
        },
        {
            "id": "5",
            "SRN": "",
            "CompID": "1001",
            "CompanyName": "Maven Tech Services Pvt. Ltd. ",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "GMname": "Krishna Pandey",
            "RMname": "Krishna Pandey",
            "AMname": "Krishna Pandey",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Inactive",
            "Action": ""
        },
        {
            "id": "6",
            "SRN": "",
            "CompID": "1001",
            "CompanyName": "Maven Tech Services Pvt. Ltd. ",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "GMname": "Krishna Pandey",
            "RMname": "Parth Patel",
            "AMname": "Krishna Pandey",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Inactive",
            "Action": ""
        },
        {
            "id": "7",
            "SRN": "",
            "CompID": "1001",
            "CompanyName": "Maven Tech Services Pvt. Ltd. ",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "GMname": "Parth Patel",
            "RMname": "Krishna Pandey",
            "AMname": "Krishna Pandey",
            "AssocName": "Khushboo Chitte",
            "Branches": "101",
            "Macs": "255",
            "MavenUsr": "250",
            "Status": "Inactive",
            "Action": ""
        },
        {
            "id": "8",
            "SRN": "",
            "CompID": "1001",
            "CompanyName": "Maven Tech Services Pvt. Ltd. ",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "GMname": "Krishna Pandey",
            "RMname": "Krishna Pandey",
            "AMname": "Krishna Pandey",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Inactive",
            "Action": ""
        },
        {
            "id": "9",
            "SRN": "",
            "CompID": "1001",
            "CompanyName": "Maven Tech Services Pvt Ltd. ",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "GMname": "Krishna Pandey",
            "RMname": "Krishna Pandey",
            "AMname": "Krishna Pandey",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "10",
            "SRN": "",
            "CompID": "1001",
            "CompanyName": "Maven Tech Services Pvt Ltd. ",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "GMname": "Krishna Pandey",
            "RMname": "Krishna Pandey",
            "AMname": "Krishna Pandey",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Inactive",
            "Action": ""
        },
        {
            "id": "11",
            "SRN": "02",
            "CompID": "1003",
            "CompanyName": "Maven Tech Services Pvt. Ltd. ",
            "State": "Gujarat",
            "City": "Pune",
            "GMname": "Krishna Pandey",
            "RMname": "Krishna Pandey",
            "AMname": "Krishna Pandey",
            "AssocName": "Parth Patel",
            "Branches": "101",
            "Macs": "250",
            "MavenUsr": "250",
            "Status": "Active",
            "Action": ""
        },
    ];

    crs.CompanyCreation.branch_data = [{
            "id": "01",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati Pune",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "BranchType": "Bus and Cargo",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "Krishna Pandey",
            "BranchContact": "1234567890",
            "BranchEmailID": "krishna.pandey@maven.com",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "02",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati parking Pune",
            "State": "Madhya Pradesh",
            "City": "Kolhapurdis",
            "BranchType": "only bus",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "khushboo prashant chitte",
            "BranchContact": "1234567890",
            "BranchEmailID": "khushboo.chitte@maventechlabs.com",
            "Status": "Inactive",
            "Action": ""
        },
        {
            "id": "03",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati Pune",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "BranchType": "Bus and Cargo",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "Krishna Pandey",
            "BranchContact": "1234567890",
            "BranchEmailID": "krishna.pandey@maven.com",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "04",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati Pune",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "BranchType": "Bus and Cargo",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "Krishna Pandey",
            "BranchContact": "1234567890",
            "BranchEmailID": "krishna.pandey@maven.com",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "05",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati Pune",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "BranchType": "Bus and Cargo",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "Krishna Pandey",
            "BranchContact": "1234567890",
            "BranchEmailID": "krishna.pandey@maven.com",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "06",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati Pune",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "BranchType": "Bus and Cargo",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "Krishna Pandey",
            "BranchContact": "1234567890",
            "BranchEmailID": "krishna.pandey@maven.com",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "07",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati Pune",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "BranchType": "Bus and Cargo",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "Krishna Pandey",
            "BranchContact": "1234567890",
            "BranchEmailID": "krishna.pandey@maven.com",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "08",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati Pune",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "BranchType": "Bus and Cargo",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "Krishna Pandey",
            "BranchContact": "1234567890",
            "BranchEmailID": "krishna.pandey@maven.com",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "09",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati Pune",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "BranchType": "Bus and Cargo",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "Krishna Pandey",
            "BranchContact": "1234567890",
            "BranchEmailID": "krishna.pandey@maven.com",
            "Status": "Active",
            "Action": ""
        },
        {
            "id": "10",
            "SRN": "",
            "BranchCode": "GTPADM",
            "BranchName": "GT Padmavati Pune",
            "State": "Gujarat",
            "City": "Ahmedabad",
            "BranchType": "Bus and Cargo",
            "BranchGSTIN": "08AAGFG7486A1ZC",
            "BranchManger": "Krishna Pandey",
            "BranchContact": "1234567890",
            "BranchEmailID": "krishna.pandey@maven.com",
            "Status": "Active",
            "Action": ""
        },
    ]

    crs.CompanyCreation.Mac_data = [{
            "id": "01",
            "SRN": "",
            "BranchCity": "Ahmedabad",
            "BranchName": "Maven Operations Ahmedabad",
            "MacAddress": "Gopala Krishna Complex,1st Floor, #45/3 Residency Road",
            "MacLocation": "Ahmedabad PC 1",
            "AcceptedByUser": "Krishna Pandey",
            "AcceptDate": "01-Aug-23",
            "Status": "Active"

        },
        {
            "id": "02",
            "SRN": "",
            "BranchCity": "Chennai, Chennai,Chennai",
            "BranchName": "Maven Operations Bangalore,Bangalore",
            "MacAddress": "Gopala Krishna Complex,1st Floor, #45/3 Residency Road, Bengaluru bangaluru",
            "MacLocation": "Account PC Ahmedabad ,Ahmedabad",
            "AcceptedByUser": "Krishna Pandey,pandey",
            "AcceptDate": "01-Aug-23",
            "Status": "Inactive"

        }
    ]

    crs.CompanyCreation.Maven_data = [{
            "id": "01",
            "SRN": "",
            "UserName": "Kishor Kumar Jha Jha kumar",
            "BranchName": "GT Padmavati Pune, Maharashtra, India, Raod",
            "MacAddress": "0263d9d0-1f13-47be-be65-875af8a36589",
            "DeviceName": "Ahmedabad PC 1",
            "UpdatedByUser": "Krishna Pandey",
            "RegisterDate": "01-Aug-23",
            "Rent+GST": "1000",
            "UserStatus": "Active",
            "DeviceAccess": "Active"

        },
        {
            "id": "02",
            "SRN": "",
            "UserName": "Pritam Pardeshi",
            "BranchName": "GT Piplaj Parking Ahmedabad",
            "MacAddress": "Gopala Krishna Complex,1st Floor, #45/3 Residency Road, Road, Maharashtra, India",
            "DeviceName": "realme - RMX3231",
            "UpdatedByUser": "Khushboo Prashant Chitte",
            "RegisterDate": "01-Aug-23",
            "Rent+GST": "500",
            "UserStatus": "Active",
            "DeviceAccess": "Active"

        }
    ]

    loadCompanyCreation();

    function loadCompanyCreation() {
        $('#company_layout thead tr')
            .clone(true)
            .addClass('filters')
            .appendTo('#company_layout thead');
        crs.CompanyCreation.tableCompanyLayout = $('#company_layout').DataTable({
            orderCellsTop: true,
            fixedHeader: true,
            data: crs.CompanyCreation.json_data,
            columns: [
                { data: 'SRN' },
                { data: 'CompID' },
                {
                    data: 'CompanyName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 29 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 28) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'State',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 10 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 9) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'City',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 10 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 9) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'GMname',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 13 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 12) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'RMname',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 12 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 11) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'AMname',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 12 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 11) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'AssocName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 12 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 11) + '...</span>' :
                            data;

                    }
                },
                { data: 'Branches' },
                { data: 'Macs' },
                { data: 'MavenUsr' },
                {
                    data: 'Status',
                    render: function(data, type, row, meta) {
                        if (data == "Active") {
                            return '<input type="checkbox" class="blue-checkbox" checked >';
                        } else {
                            return '<input type="checkbox" class="red-checkbox">';
                        }

                    }
                },
                {
                    data: 'Action',
                    render: function(data, type, row, meta) {
                        return '<div id="Action-' + row.id + '"><div class="editBtn"><span class=\"edit_icon\"></span></div></div>'
                    }
                }

            ],
            columnDefs: [
                { "className": 'dt-body-center', "width": "3%", "targets": 0 },
                { "width": "7%", "targets": 1 },
                { "width": "17%", "targets": 2 },
                { "width": "4%", "targets": 3 },
                { "width": "4%", "targets": 4 },
                { "width": "10%", "targets": 5 },
                { "width": "9%", "targets": 6 },
                { "width": "9%", "targets": 7 },
                { "width": "9%", "targets": 8 },
                { "className": 'dt-body-right', "width": "5%", "targets": 9 },
                { "className": 'dt-body-right', "width": "5%", "targets": 10 },
                { "className": 'dt-body-right', "width": "9%", "targets": 11 },
                { orderable: false, "className": 'dt-body-center', "className": 'dt-body-center', "width": "5%", "targets": 12 },
                { orderable: false, "className": 'dt-body-center', "width": "5%", "targets": 13 }

            ],
            fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                var index = iDisplayIndexFull + 1;
                $("td:first", nRow).html(index);
                return nRow;
            },
            retrieve: true,
            paging: true,
            ordering: true,
            scrollY: '65vh',
            searching: true,
            pagingType: "full",
            pageLength: 10,
            scrollCollapse: true,
            sDom: '<"dom_wrapper"flipt>',
            oLanguage: {
                "sLengthMenu": "Rows per page _MENU_",
            },
            language: {
                info: "_START_ - _END_ of _TOTAL_",
                infoEmpty: "No result found",
                infoFiltered: "",
                paginate: {
                    first: '<span class="first_page_icon"></span>',
                    previous: '<span class="prev_page_icon"></span>',
                    next: '<span class="next_page_icon"></span>',
                    last: '<span class="last_page_icon"></span>',
                },
                search: "",
                searchPlaceholder: "Search"

            },
            initComplete: function() {
                var api = this.api();
                api
                    .columns()
                    .eq(0)
                    .each(function(colIdx) {

                        var cell = $('.filters th').eq(
                            $(api.column(colIdx).header()).index()
                        );
                        var title = $(cell).text();
                        if ($(cell).text() == 'Action') {
                            $(cell).html('<div class="editBtn"><span class=\"disabled_edit_icon\"></span></div>')
                        } else if ($(cell).text() == 'Status') {
                            $(cell).html('<input type="checkbox" class="blue-checkbox" style="margin-left:16px;" checked disabled></input>')
                        } else if ($(cell).text() == 'SRN') {
                            $(cell).html('<input type="text" class="input-filter" placeholder="Contains" disabled />');
                        } else {
                            $(cell).html('<div style="display:flex; gap:10px;"><input type="text" class="input-filter" placeholder="Contains" /><div class="filterx"></div></div>');
                        }

                        $(
                                'input',
                                $('.filters th').eq($(api.column(colIdx).header()).index())
                            )
                            .off('keyup change')
                            .on('change', function(e) {
                                $(this).attr('title', $(this).val());
                                var regexr = '({search})';


                                api
                                    .column(colIdx)
                                    .search(
                                        this.value != '' ?
                                        regexr.replace('{search}', '(((' + this.value + ')))') :
                                        '',
                                        this.value != '',
                                        this.value == ''
                                    )
                                    .draw();
                            })

                        .on('keyup', function(e) {
                            var cursorPosition = this.selectionStart;

                            e.stopPropagation();

                            $(this).trigger('change');
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                    });
            },

        });

        $('#company_layout tbody').on('click', '.editBtn', function() {
            let data_row = crs.CompanyCreation.tableCompanyLayout.row($(this).parents('tr')).data();
            $("#new_creation_btn").css("display", "none")
            $(".CompanyCreationTable").css("display", "none")
            $(".navbar-company-name").css("display", "block")
            $(".header").css("display", "block")
            $(".page-container").css("display", "block")
            $("#tabSeakholder_State").val(data_row.State);
        });

    }

    function loadBranchDetails() {
        $('#branch_details thead tr')
            .clone(true)
            .addClass('branch-filter')
            .appendTo('#branch_details thead');
        crs.CompanyCreation.tableBranchDetails = $('#branch_details').DataTable({
            orderCellsTop: true,
            fixedHeader: true,
            data: crs.CompanyCreation.branch_data,
            columns: [
                { data: 'SRN' },
                {
                    data: 'BranchCode'
                },
                {
                    data: 'BranchName',
                    render: function(data, type, row, meta) {

                        if (type === 'display' && data.length > 24) {
                            return '<div id="BranchName-' + row.id + '"><span style="text-decoration: underline;" title="' + data + '" class="input-data">' + data.substr(0, 23) + '...</span><input class="input-field form-control" value="' + data + '"/></div>';
                        } else {
                            return '<div id="BranchName-' + row.id + '"><span title="' + data + '" class="input-data">' + data + '</span><input class="input-field form-control" value="' + data + '"/></div>';
                        }

                    }
                },
                {
                    data: 'State',
                    render: function(data, type, row, meta) {

                        if (type === 'display' && data.length > 8) {
                            return '<div id="State-' + row.id + '"><span style="text-decoration: underline;" title="' + data + '" class="input-data">' + data.substr(0, 7) + '...</span><input class="input-field form-control" value="' + data + '"/></div>';
                        } else {
                            return '<div id="State-' + row.id + '"><span title="' + data + '" class="input-data">' + data + '</span><input class="input-field form-control" value="' + data + '"/></div>';
                        }


                    }
                },
                {
                    data: 'City',
                    render: function(data, type, row, meta) {

                        if (type === 'display' && data.length > 5) {
                            return '<div id="City-' + row.id + '"><span style="text-decoration: underline;" title="' + data + '" class="input-data">' + data.substr(0, 4) + '...</span><input class="input-field form-control" value="' + data + '"/></div>';
                        } else {
                            return '<div id="City-' + row.id + '"><span title="' + data + '" class="input-data">' + data + '</span><input class="input-field form-control" value="' + data + '"/></div>';
                        }

                    }
                },
                {
                    data: 'BranchType',
                    render: function(data, type, row, meta) {

                        if (type === 'display' && data.length > 15) {
                            return '<div id="BranchType-' + row.id + '"><span style="text-decoration: underline;" title="' + data + '" class="input-data">' + data.substr(0, 14) + '...</span><div class="dropdown"><select id="myselectId-' + row.id + '" style="width: 103px !important; height: 26px;"></select></div></div>';
                        } else {
                            return '<div id="BranchType-' + row.id + '"><span title="' + data + '" class="input-data">' + data + '</span><div class="dropdown"><select id="myselectId-' + row.id + '" style="width: 103px !important; height: 26px;"></select></div></div>';
                        }

                    }
                },
                {
                    data: 'BranchGSTIN',
                    render: function(data, type, row, meta) {

                        return '<div id="BranchGSTIN-' + row.id + '"><span title="' + data + '" class="input-data">' + data + '</span><input class="input-field form-control" value="' + data + '"/></div>';


                    }
                },
                {
                    data: 'BranchManger',
                    render: function(data, type, row, meta) {

                        if (type === 'display' && data.length > 16) {
                            return '<div id="BranchManger-' + row.id + '"><span style="text-decoration: underline;" title="' + data + '" class="input-data">' + data.substr(0, 15) + '...</span><input class="input-field form-control" value="' + data + '"/></div>';
                        } else {
                            return '<div id="BranchManger-' + row.id + '"><span title="' + data + '" class="input-data">' + data + '</span><input class="input-field form-control" value="' + data + '"/></div>';
                        }

                    }
                },
                {
                    data: 'BranchContact',
                    render: function(data, type, row, meta) {

                        if (type === 'display' && data.length > 10) {
                            return '<div id="BranchContact-' + row.id + '"><span style="text-decoration: underline;" title="' + data + '" class="input-data">' + data.substr(0, 9) + '...</span><input class="input-field form-control" value="' + data + '"/></div>';
                        } else {
                            return '<div id="BranchContact-' + row.id + '"><span title="' + data + '" class="input-data">' + data + '</span><input class="input-field form-control" value="' + data + '"/></div>';
                        }

                    }
                },
                {
                    data: 'BranchEmailID',
                    render: function(data, type, row, meta) {

                        if (type === 'display' && data.length > 24) {
                            return '<div id="BranchEmailID-' + row.id + '"><span style="text-decoration: underline;" title="' + data + '" class="input-data">' + data.substr(0, 23) + '...</span><input class="input-field form-control" value="' + data + '"/></div>';
                        } else {
                            return '<div id="BranchEmailID-' + row.id + '"><span title="' + data + '" class="input-data">' + data + '</span><input class="input-field form-control" value="' + data + '"/></div>';
                        }

                    }
                },
                {
                    data: 'Status',
                    render: function(data, type, row, meta) {
                        if (data == "Active") {
                            return '<input type="checkbox" class="blue-checkbox" checked >';
                        } else {
                            return '<input type="checkbox" class="red-checkbox">';
                        }

                    }
                },
                {
                    data: 'Action',
                    render: function(data, type, row, meta) {
                        return '<div id="Action-' + row.id + '"><div class="editsaveBtn"><span class=\"edit-icon\"></span></div><div class="saveBtn"><button type="button" class="btn1 btn-orange" style="padding: 4px 6px;">Save</button></div></div></div>'
                    }

                }

            ],
            columnDefs: [
                { "className": 'dt-body-center', "width": "4%", "targets": 0 },
                { "width": "9%", "targets": 1 },
                { "width": "12%", "targets": 2 },
                { "width": "6%", "targets": 3 },
                { "width": "6%", "targets": 4 },
                { "width": "10%", "targets": 5 },
                { "width": "9%", "targets": 6 },
                { "width": "10%", "targets": 7 },
                { "width": "10%", "targets": 8 },
                { "width": "14%", "targets": 9 },
                { orderable: false, "className": 'dt-body-center', "width": "5%", "targets": 10 },
                { orderable: false, "className": 'dt-body-center', "width": "5%", "targets": 11 }

            ],
            "fnRowCallback": function(nRow, aData, iDisplayIndex) {
                $("td:first", nRow).html(iDisplayIndex + 1);
                return nRow;
            },
            scrollCollapse: true,
            retrieve: true,
            scrollY: '55vh',
            paging: false,
            searching: false,
            initComplete: function() {
                var api = this.api();
                api
                    .columns()
                    .eq(0)
                    .each(function(colIdx) {
                        // Set the header cell to contain the input element
                        var cells = $('.branch-filter th').eq(
                            $(api.column(colIdx).header()).index()
                        );
                        var title = $(cells).text();
                        if (title == 'Action') {
                            $(cells).html('<div class="editBtn"><span class=\"disabled_edit_icon\" style="margin: 0px 0px 0px 17px;"></span></div>')
                        } else if (title == 'Status') {
                            $(cells).html('<input type="checkbox" class="blue-checkbox" style="margin-left:17px;" checked disabled></input>')
                        } else if (title == 'SRN') {
                            $(cells).html('<input type="text" class="input-filter" placeholder="Contains" disabled />');
                        } else {
                            $(cells).html('<div style="display:flex; gap:10px;"><input type="text" class="input-filter" placeholder="Contains" /><div class="filterx"></div></div>');
                        }

                        $(
                            'input',
                            $('.branch-filter th').eq($(api.column(colIdx).header()).index())
                        )

                        .off('keyup change')
                            .on('change', function(e) {
                                $(this).attr('title', $(this).val());
                                var regexr = '({search})';

                                api
                                    .column(colIdx)
                                    .search(
                                        this.value != '' ?
                                        regexr.replace('{search}', '(((' + this.value + ')))') :
                                        '',
                                        this.value != '',
                                        this.value == ''
                                    )
                                    .draw();
                            })

                        .on('keyup', function(e) {
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            e.stopPropagation();

                            $(this).trigger('change');
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                    });

            },

        });
        $('#branch_details tbody').on('click', '.editsaveBtn', function() {

            $(this).parents('tr').children().removeClass("sorting_1");
            $(this).parents('tr').children().addClass("backg-color");


            console.log($(this).parents('tr'));
            $(".dropdown").hide()
            $(".saveBtn").hide()
            $(".editsaveBtn").show()
            $(".input-data").show()
            $(".input-field").hide()

            let selectValues = {
                1: "Bus",
                2: "Cargo"
            };

            let data_row = crs.CompanyCreation.tableBranchDetails.row($(this).parents('tr')).data();

            $("#BranchName-" + data_row.id + " .input-data").hide()
            $("#BranchName-" + data_row.id + " .input-field").show()
            $("#State-" + data_row.id + " .input-data").hide()
            $("#State-" + data_row.id + " .input-field").show()
            $("#City-" + data_row.id + " .input-data").hide()
            $("#City-" + data_row.id + " .input-field").show()
            $("#BranchType-" + data_row.id + " .input-data").hide()
            $("#BranchType-" + data_row.id + " .dropdown").show()
            $.each(selectValues, function(val, text) {
                $("#myselectId-" + data_row.id).append(
                    $('<option></option>').val(val).html(text)
                );
            });
            $("#myselectId-" + data_row.id).chosen()

            $("#BranchGSTIN-" + data_row.id + " .input-data").hide()
            $("#BranchGSTIN-" + data_row.id + " .input-field").show()
            $("#BranchManger-" + data_row.id + " .input-data").hide()
            $("#BranchManger-" + data_row.id + " .input-field").show()
            $("#BranchContact-" + data_row.id + " .input-data").hide()
            $("#BranchContact-" + data_row.id + " .input-field").show()
            $("#BranchEmailID-" + data_row.id + " .input-data").hide()
            $("#BranchEmailID-" + data_row.id + " .input-field").show()
            $("#Action-" + data_row.id + " .editsaveBtn").hide()
            $("#Action-" + data_row.id + " .saveBtn").show()

        });
        $('#branch_details tbody').on('click', '.saveBtn', function() {
            $(this).parents('tr').children().removeClass("backg-color").addClass("sorting_1")
            console.log($("tbody").parents('tr'))
            var data_row = crs.CompanyCreation.tableBranchDetails.row($(this).parents('tr')).data();
            $("#Action-" + data_row.id + " .saveBtn").hide()
            $("#Action-" + data_row.id + " .editsaveBtn").show()
            $("#BranchName-" + data_row.id + " .input-data").show()
            $("#BranchName-" + data_row.id + " .input-field").hide()
            $("#State-" + data_row.id + " .input-data").show()
            $("#State-" + data_row.id + " .input-field").hide()
            $("#City-" + data_row.id + " .input-data").show()
            $("#City-" + data_row.id + " .input-field").hide()
            $("#BranchType-" + data_row.id + " .dropdown").hide()
            $("#BranchType-" + data_row.id + " .input-data").show()
            $("#BranchGSTIN-" + data_row.id + " .input-data").show()
            $("#BranchGSTIN-" + data_row.id + " .input-field").hide()
            $("#BranchManger-" + data_row.id + " .input-data").show()
            $("#BranchManger-" + data_row.id + " .input-field").hide()
            $("#BranchContact-" + data_row.id + " .input-data").show()
            $("#BranchContact-" + data_row.id + " .input-field").hide()
            $("#BranchEmailID-" + data_row.id + " .input-data").show()
            $("#BranchEmailID-" + data_row.id + " .input-field").hide()
        })

    }

    function loadMacDetails() {
        $('#Mac_details thead tr')
            .clone(true)
            .addClass('mac-filter')
            .appendTo('#Mac_details thead');
        crs.CompanyCreation.tableMacLayout = $('#Mac_details').DataTable({
            orderCellsTop: true,
            fixedHeader: true,
            data: crs.CompanyCreation.Mac_data,
            columns: [
                { data: 'SRN' },
                {
                    data: 'BranchCity',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 18 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 17) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'BranchName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 30 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 29) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'MacAddress',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 60 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 59) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'MacLocation',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 27 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 26) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'AcceptedByUser',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'AcceptDate',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 12 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 11) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'Status',
                    render: function(data, type, row, meta) {
                        if (data == "Active") {
                            return '<input type="checkbox" class="blue-checkbox" checked >';
                        } else {
                            return '<input type="checkbox" class="red-checkbox">';
                        }

                    }
                },

            ],
            columnDefs: [
                { "className": 'dt-body-center', "width": "3%", "targets": 0 },
                { "width": "10%", "targets": 1 },
                { "width": "17%", "targets": 2 },
                { "width": "31%", "targets": 3 },
                { "width": "17%", "targets": 4 },
                { "width": "10%", "targets": 5 },
                { "width": "8%", "targets": 6 },
                { orderable: false, "className": 'dt-body-center', "width": "4%", "targets": 7 },

            ],
            fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                var index = iDisplayIndexFull + 1;
                $("td:first", nRow).html(index);
                return nRow;
            },
            scrollCollapse: true,
            retrieve: true,
            scrollY: '55vh',
            paging: false,
            searching: false,
            initComplete: function() {
                var api = this.api();
                api
                    .columns()
                    .eq(0)
                    .each(function(colIdx) {

                        var row = $('.mac-filter th').eq(
                            $(api.column(colIdx).header()).index()
                        );
                        var title = $(row).text();

                        if ($(row).text() == 'Status') {
                            $(row).html('<input type="checkbox" class="blue-checkbox" style="margin-left:13px;" checked disabled></input>')
                        } else if ($(row).text() == 'SRN') {
                            $(row).html('<input type="text" class="input-filter" placeholder="Contains" disabled />');
                        } else {
                            $(row).html('<div style="display:flex; gap:10px;"><input type="text" class="input-filter" placeholder="Contains" /><div class="filterx"></div></div>');
                        }

                        $(
                                'input',
                                $('.mac-filter th').eq($(api.column(colIdx).header()).index())
                            )
                            .off('keyup change')
                            .on('change', function(e) {

                                $(this).attr('title', $(this).val());
                                var regexr = '({search})';


                                api
                                    .column(colIdx)
                                    .search(
                                        this.value != '' ?
                                        regexr.replace('{search}', '(((' + this.value + ')))') :
                                        '',
                                        this.value != '',
                                        this.value == ''
                                    )
                                    .draw();
                            })

                        .on('keyup', function(e) {
                            var cursorPosition = this.selectionStart;

                            e.stopPropagation();

                            $(this).trigger('change');
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                    });
            },

        });
    }

    function loadMavenDetails() {
        $('#Maven_details thead tr')
            .clone(true)
            .addClass('maven-filter')
            .appendTo('#Maven_details thead');
        crs.CompanyCreation.tableMacLayout = $('#Maven_details').DataTable({
            orderCellsTop: true,
            fixedHeader: true,
            data: crs.CompanyCreation.Maven_data,
            columns: [
                { data: 'SRN' },
                {
                    data: 'UserName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 17 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 16) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'BranchName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 25 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 24) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'MacAddress',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 45 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 44) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'DeviceName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 16 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 15) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'UpdatedByUser',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'RegisterDate',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 12 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 11) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'Rent+GST',
                    render: function(data, type, row, meta) {
                        return '<input class="form-control" value="' + data + '"/>'
                    }
                },
                {
                    data: 'UserStatus',
                    render: function(data, type, row, meta) {
                        if (data == "Active") {
                            return '<input type="checkbox" class="blue-checkbox" checked >';
                        } else {
                            return '<input type="checkbox" class="red-checkbox">';
                        }

                    }
                },
                {
                    data: 'DeviceAccess',
                    render: function(data, type, row, meta) {
                        if (data == "Active") {
                            return '<input type="checkbox" class="blue-checkbox" checked >';
                        } else {
                            return '<input type="checkbox" class="red-checkbox">';
                        }

                    }
                },

            ],
            columnDefs: [
                { "className": 'dt-body-center', "width": "3%", "targets": 0 },
                { "width": "9%", "targets": 1 },
                { "width": "12%", "targets": 2 },
                { "width": "24%", "targets": 3 },
                { "width": "10%", "targets": 4 },
                { "width": "10%", "targets": 5 },
                { "width": "8%", "targets": 6 },
                { "className": 'dt-body-center', "width": "7%", "targets": 7 },
                { orderable: false, "className": 'dt-body-center', "width": "7%", "targets": 8 },
                { orderable: false, "className": 'dt-body-center', "width": "8%", "targets": 9 }

            ],
            fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                var index = iDisplayIndexFull + 1;
                $("td:first", nRow).html(index);
                return nRow;
            },
            scrollCollapse: true,
            retrieve: true,
            scrollY: '55vh',
            paging: false,
            searching: false,
            initComplete: function() {
                var api = this.api();
                api
                    .columns()
                    .eq(0)
                    .each(function(colIdx) {

                        var maven_cell = $('.maven-filter th').eq(
                            $(api.column(colIdx).header()).index()
                        );

                        var title = $(maven_cell).text();

                        if (title == 'User Status') {
                            $(maven_cell).html('<input type="checkbox" class="blue-checkbox" style="margin-left:29px;" checked disabled></input>')
                        } else if (title == 'Device Access') {
                            $(maven_cell).html('<input type="checkbox" class="blue-checkbox" style="margin-left:35px;" checked disabled></input>')
                        } else if (title == 'SRN') {
                            $(maven_cell).html('<input type="text" class="input-filter" placeholder="Contains" disabled />');
                        } else {
                            $(maven_cell).html('<div style="display:flex; gap:10px;"><input type="text" class="input-filter" placeholder="Contains" /><div class="filterx"></div></div>');
                        }

                        $(
                                'input',
                                $('.maven-filter th').eq($(api.column(colIdx).header()).index())
                            )
                            .off('keyup change')
                            .on('change', function(e) {
                                // Get the search value
                                $(this).attr('title', $(this).val());
                                var regexr = '({search})';


                                api
                                    .column(colIdx)
                                    .search(
                                        this.value != '' ?
                                        regexr.replace('{search}', '(((' + this.value + ')))') :
                                        '',
                                        this.value != '',
                                        this.value == ''
                                    )
                                    .draw();
                            })

                        .on('keyup', function(e) {
                            var cursorPosition = this.selectionStart;

                            e.stopPropagation();

                            $(this).trigger('change');
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                    });
            },

        });
    }

    function loadChartWithComp() {
        $('#Chart_with_comp thead tr')
            .clone(true)
            .addClass('with_comp_filter')
            .appendTo('#Chart_with_comp thead');
        crs.CompanyCreation.tableCompanyLayout = $('#Chart_with_comp').DataTable({
            orderCellsTop: true,
            fixedHeader: true,
            data: crs.CompanyCreation.json_data,
            columns: [
                { data: 'SRN' },
                { data: 'CompID' },
                {
                    data: 'CompanyName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 29 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 28) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'State',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 10 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 9) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'City',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 10 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 9) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'GMname',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'RMname',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'AMname',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'AssocName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                { data: 'Branches' },
                { data: 'Macs' },
                { data: 'MavenUsr' },
                {
                    data: 'Status',
                    render: function(data, type, row, meta) {
                        if (data == "Active") {
                            return '<input type="checkbox" class="blue-checkbox" checked >';
                        } else {
                            return '<input type="checkbox" class="red-checkbox">';
                        }

                    }
                }
            ],
            columnDefs: [
                { "className": 'dt-body-center', "width": "3%", "targets": 0 },
                { "width": "7%", "targets": 1 },
                { "width": "17%", "targets": 2 },
                { "width": "4%", "targets": 3 },
                { "width": "5%", "targets": 4 },
                { "width": "11%", "targets": 5 },
                { "width": "10%", "targets": 6 },
                { "width": "10%", "targets": 7 },
                { "width": "10%", "targets": 8 },
                { "className": 'dt-body-right', "width": "6%", "targets": 9 },
                { "className": 'dt-body-right', "width": "5%", "targets": 10 },
                { "className": 'dt-body-right', "width": "9%", "targets": 11 },
                { orderable: false, "className": 'dt-body-center', "className": 'dt-body-center', "width": "5%", "targets": 12 }

            ],
            fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                var index = iDisplayIndexFull + 1;
                $("td:first", nRow).html(index);
                return nRow;
            },
            scrollCollapse: true,
            retrieve: true,
            scrollY: '55vh',
            paging: false,
            searching: false,
            initComplete: function() {
                var api = this.api();
                api
                    .columns()
                    .eq(0)
                    .each(function(colIdx) {
                        // Set the header cell to contain the input element
                        var with_comp_cell = $('.with_comp_filter th').eq(
                            $(api.column(colIdx).header()).index()
                        );
                        var title = $(with_comp_cell).text();
                        if (title == 'Status') {
                            $(with_comp_cell).html('<input type="checkbox" class="blue-checkbox" style="margin-left:13px;" checked disabled></input>')
                        } else if (title == 'SRN') {
                            $(with_comp_cell).html('<input type="text" class="input-filter" placeholder="Contains" disabled />');
                        } else {
                            $(with_comp_cell).html('<div style="display:flex; gap:10px;"><input type="text" class="input-filter" placeholder="Contains" /><div class="filterx"></div></div>');
                        }

                        // On every keypress in this input
                        $(
                                'input',
                                $('.with_comp_filter th').eq($(api.column(colIdx).header()).index())
                            )
                            .off('keyup change')
                            .on('change', function(e) {
                                // Get the search value
                                $(this).attr('title', $(this).val());
                                var regexr = '({search})'; //$(this).parents('th').find('select').val();


                                api
                                    .column(colIdx)
                                    .search(
                                        this.value != '' ?
                                        regexr.replace('{search}', '(((' + this.value + ')))') :
                                        '',
                                        this.value != '',
                                        this.value == ''
                                    )
                                    .draw();
                            })

                        .on('keyup', function(e) {
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            e.stopPropagation();

                            $(this).trigger('change');
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                    });
            },

        });


    }

    function loadChartFromComp() {
        $('#Chart_from_comp thead tr')
            .clone(true)
            .addClass('from_comp_filter')
            .appendTo('#Chart_from_comp thead');
        crs.CompanyCreation.tableCompanyLayout = $('#Chart_from_comp').DataTable({
            orderCellsTop: true,
            fixedHeader: true,
            data: crs.CompanyCreation.json_data,
            columns: [
                { data: 'SRN' },
                { data: 'CompID' },
                {
                    data: 'CompanyName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 29 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 28) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'State',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 10 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 9) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'City',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 10 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 9) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'GMname',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'RMname',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'AMname',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                {
                    data: 'AssocName',
                    render: function(data, type, row, meta) {

                        return type === 'display' && data.length > 15 ?
                            '<span style="text-decoration: underline;" title="' + data + '">' + data.substr(0, 14) + '...</span>' :
                            data;

                    }
                },
                { data: 'Branches' },
                { data: 'Macs' },
                { data: 'MavenUsr' },
                {
                    data: 'Status',
                    render: function(data, type, row, meta) {
                        if (data == "Active") {
                            return '<input type="checkbox" class="blue-checkbox" checked >';
                        } else {
                            return '<input type="checkbox" class="red-checkbox">';
                        }

                    }
                }
            ],
            columnDefs: [
                { "className": 'dt-body-center', "width": "3%", "targets": 0 },
                { "width": "7%", "targets": 1 },
                { "width": "17%", "targets": 2 },
                { "width": "4%", "targets": 3 },
                { "width": "5%", "targets": 4 },
                { "width": "11%", "targets": 5 },
                { "width": "10%", "targets": 6 },
                { "width": "10%", "targets": 7 },
                { "width": "10%", "targets": 8 },
                { "className": 'dt-body-right', "width": "6%", "targets": 9 },
                { "className": 'dt-body-right', "width": "5%", "targets": 10 },
                { "className": 'dt-body-right', "width": "9%", "targets": 11 },
                { orderable: false, "className": 'dt-body-center', "className": 'dt-body-center', "width": "5%", "targets": 12 }

            ],
            fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                var index = iDisplayIndexFull + 1;
                $("td:first", nRow).html(index);
                return nRow;
            },
            scrollCollapse: true,
            retrieve: true,
            scrollY: '55vh',
            paging: false,
            searching: false,
            initComplete: function() {
                var api = this.api();
                api
                    .columns()
                    .eq(0)
                    .each(function(colIdx) {
                        // Set the header cell to contain the input element
                        var from_comp_cell = $('.from_comp_filter th').eq(
                            $(api.column(colIdx).header()).index()
                        );
                        var title = $(from_comp_cell).text();
                        if (title == 'Status') {
                            $(from_comp_cell).html('<input type="checkbox" class="blue-checkbox" style="margin-left:13px;" checked disabled></input>')
                        } else if (title == 'SRN') {
                            $(from_comp_cell).html('<input type="text" class="input-filter" placeholder="Contains" disabled />');
                        } else {
                            $(from_comp_cell).html('<div style="display:flex; gap:10px;"><input type="text" class="input-filter" placeholder="Contains" /><div class="filterx"></div></div>');
                        }

                        // On every keypress in this input
                        $(
                                'input',
                                $('.from_comp_filter th').eq($(api.column(colIdx).header()).index())
                            )
                            .off('keyup change')
                            .on('change', function(e) {
                                // Get the search value
                                $(this).attr('title', $(this).val());
                                var regexr = '({search})';


                                api
                                    .column(colIdx)
                                    .search(
                                        this.value != '' ?
                                        regexr.replace('{search}', '(((' + this.value + ')))') :
                                        '',
                                        this.value != '',
                                        this.value == ''
                                    )
                                    .draw();
                            })

                        .on('keyup', function(e) {
                            var cursorPosition = this.selectionStart;

                            e.stopPropagation();

                            $(this).trigger('change');
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                    });
            },

        });


    }

    // **********************new creation button, Company Creation************************
    $(".chosen").chosen();

    $("#new_creation_btn").click(function() {
        $(this).css("display", "none")
        $(".CompanyCreationTable").css("display", "none")
        $(".navbar-company-name").css("display", "block")
        $(".header").css("display", "block")
        $(".page-container").css("display", "block")
    })

    // *******************************Popup******************************
    $("#availability_check_btn").click(function() {
        $("#availability_check").modal("show");
    })
    $("#OTP_verify").click(function() {
        $("#OTP_modal").modal("show");
    })
    $("#submit_btn").click(function() {
        $("#OTP_modal").modal("hide");
        $("#OTP_verify").css("display", "none")
        $("#verified_btn").css("display", "block")
        $("#comp_name").css("width", "349px")
    });

    // ***********************company creation btn***********************
    $("#save_proceed").click(function() {
        $("#tabSeakholder").removeClass("active-tab1")
        $("#tabSeakholder").addClass("confirm-tab ")
        $("#green_check_icon").addClass("green-confirm-icon")
        $(".seakholder-panel").css("display", "none")
        $("#tabAddress").addClass("active-tab1")
        $(".address-panel").css("display", "block")

    })
    $("#address_save").click(function() {
        $("#tabSeakholder").removeClass("active-tab1")
        $("#tabSeakholder").addClass("confirm-tab ")
        $("#green_check_icon").addClass("green-confirm-icon")
        $(".seakholder-panel").css("display", "none")
        $("#tabAddress").removeClass("active-tab1")
        $("#tabAddress").addClass("confirm-tab")
        $("#green_check_icon1").addClass("green-confirm-icon")
        $(".address-panel").css("display", "none")
        $("#tabGSTIN_PAN").addClass("active-tab1")
        $(".GSTIN_PAN-panel").css("display", "block")

    })

    $("#seakholder_cancel_btn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#GSTIN_PAN_cancel_btn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")

    })
    $("#Address_cancel_btn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")

    })
    $("#GSTIN_Fetch_btn").click(function() {
        $("#GSTIN_verified_btn").css("display", "block")
        $(".GSTIN-details").css("display", "flex")
        $(".GSTIN-ADM-details").css("display", "flex")
    })
    $("#PAN_Fetch_btn").click(function() {
        $("#PAN_verified_btn").css("display", "block")
        $(".PAN-details").css("display", "flex")
        $(".PAN-ADM-details").css("display", "flex")
    })

    // *****************tab branch btn************

    $("#tabBranch_saveBtn").click(function() {
        $("#Success_Modal").modal("show")
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#tabBranch_cancelBtn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })

    // *************cancellation  btn************
    $(".radio_btn1").click(function() {
        $(this).prop("checked", true);
        $(".onclick_radio_btn1").css("display", "flex");
        $(".onclick_radio_btn2").css("display", "none");
        $(".onclick_radio_btn3").css("display", "none");
        $(".radio_btn2").parent('div').removeClass("radio-tab");
        $(".radio_btn3").parent('div').removeClass("radio-tab");
        $(this).parent('div').addClass("radio-tab");
    });
    $(".radio_btn2").click(function() {
        $(this).prop("checked", true);
        $(".onclick_radio_btn1").css("display", "none");
        $(".onclick_radio_btn2").css("display", "flex");
        $(".onclick_radio_btn3").css("display", "none");
        $(".radio_btn1").parent('div').removeClass("radio-tab");
        $(".radio_btn3").parent('div').removeClass("radio-tab");
        $(this).parent('div').addClass("radio-tab");
    });
    $(".radio_btn3").click(function() {
        $(this).prop("checked", true);
        $(".onclick_radio_btn1").css("display", "none");
        $(".onclick_radio_btn2").css("display", "none");
        $(".onclick_radio_btn3").css("display", "flex");
        $(".radio_btn1").parent('div').removeClass("radio-tab");
        $(".radio_btn2").parent('div').removeClass("radio-tab");
        $(this).parent('div').addClass("radio-tab");
    });

    $("#tabCancellation_save_proceed").click(function() {
        $("#Success_Modal").modal("show")
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#GSTIN_PAN_save_btn").click(function() {
        $("#Success_Modal").modal("show")
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#tabCancellation_cancel_btn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })

    // ***********commercial btn******************
    $("#productRent_save_btn").click(function() {
        $("#tabProductRent").addClass("confirm-tab ")
        $(".tabCommercial #green_check_icon").addClass("green-confirm-icon")
        $("#tabMavenCommission").addClass("active-tab1")
        $(".product-rent-panel").css("display", "none")
        $(".maven-commission-panel").css("display", "block")
    })
    $("#maven_commission_save_btn").click(function() {
        $("#Success_Modal").modal("show")
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#productRent_cancel_btn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#maven_commission_cancel_btn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })

    // *****************tab Mac btn************

    $("#tabMac_saveBtn").click(function() {
        $("#Success_Modal").modal("show")
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#tabMac_cancelBtn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })

    // ******************Active/Inactive dropdown colour change**************

    let val = $('#comp_status option:selected').val();
    if (val == "Active") {
        $("#comp_status_chosen >.chosen-single").css("border", "2px solid #16B851")
        $("#comp_status_chosen >.chosen-single span").css("color", "#16B851")
        $("#comp_status_chosen +.dropdown-label.active-label").css("color", "#16B851")
        $("#comp_status_chosen >.chosen-single div b").css("border-top", "5px solid #16B851")
    }
    $("#comp_status").change(function() {
        var val = $('#comp_status option:selected').val();
        if (val == "Active") {
            $("#comp_status_chosen >.chosen-single").css("border", "2px solid #16B851")
            $("#comp_status_chosen >.chosen-single span").css("color", "#16B851")
            $("#comp_status_chosen +.dropdown-label.active-label").css("color", "#16B851")
            $("#comp_status_chosen >.chosen-single div b").css("border-top", "5px solid #16B851")
        } else if (val == "Inactive") {
            $("#comp_status_chosen >.chosen-single").css("border", "2px solid #FF1616")
            $("#comp_status_chosen >.chosen-single span").css("color", "#FF1616")
            $("#comp_status_chosen +.dropdown-label.active-label").css("color", "#FF1616")
            $("#comp_status_chosen +.dropdown-label.active-label").css("color", "#FF1616")
            $("#comp_status_chosen >.chosen-single div b").css("border-top", "5px solid #FF1616")
        }
    });

    // *************************tab Maven btn**************************
    $("#tabMaven_saveBtn").click(function() {
        $("#Success_Modal").modal("show")
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#tabMaven_cancelBtn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })

    // ********************tabChartWithComp**********************************
    $("#tabChartWithComp_saveBtn").click(function() {
        $("#Success_Modal").modal("show")
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#tabChartWithComp_cancelBtn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })

    // ********************tabChartFromComp**********************************
    $("#tabChartFromComp_saveBtn").click(function() {
        $("#Success_Modal").modal("show")
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })
    $("#tabChartFromComp_cancelBtn").click(function() {
        $(".navbar-company-name").css("display", "none")
        $(".header").css("display", "none")
        $(".page-container").css("display", "none")
        $("#new_creation_btn").css("display", "block")
        $(".CompanyCreationTable").css("display", "block")
    })

}