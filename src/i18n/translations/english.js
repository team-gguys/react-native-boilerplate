export default {
    translation: {
        // LoginScreen
        LoginScreen: {
            welcome_back: 'Welcome back!',
            email_or_phone_number: 'Email or phone number.',
            name_placeholder: 'name@domain.com',
            password_placeholder: 'Password',
            log_in: 'LOG IN',
            the_input_is_not_valid: 'The input is not valid E-mail!',
            please_input_your_password: 'Please input your password',
            the_email_address_incorrect: 'The e-mail address or password you entered was incorrect!',
        },


        // BuildingListScreen
        BuildingListScreen: {
            buildings: 'Buildings',
            search_buildings_by_name: 'Search by name, owner, or address',

            // BuildingItem
            BuildingItem_owner: 'Owner',
            BuildingItem_rented: 'Rented',
            BuildingItem_empty: 'Empty',
        },


        // BuildingDetailScreen
        BuildingDetailScreen: {
            buildings: 'Buildings',

            // DetailInfo
            DetailInfo_owner: 'Owner',
            DetailInfo_total_units: 'Total Units',
            DetailInfo_rented_units: 'Rented Units',
            DetailInfo_empty_units: 'Empty Units',

            // Tabbar
            Tabbar_extra_info: 'Extra Info',
            Tabbar_units: 'Units',
            Tabbar_documents: 'Documents',

            // UnitDetail
            UnitDetail_floor_plan: 'Floor Plan',
            UnitDetail_total_rent: 'Total Rent',
            UnitDetail_contract_period: 'Contract Period',

            // ExtraInfo
            ExtraInfo_transportation: 'Transportation',
            ExtraInfo_build_year: 'Build Year',
            ExtraInfo_construction: 'Construction',
            ExtraInfo_number_of_floor: 'Number of Floors',
            ExtraInfo_land_area: 'Land Area',
            ExtraInfo_building_area: 'Building Area',
            ExtraInfo_elevator: 'Elevator',
            ExtraInfo_parking: 'Parking',
            ExtraInfo_bicycle_parking: 'Bicycle Parking',
            ExtraInfo_auto_lock: 'Auto Lock',
        },


        // UnitDetailScreen
        UnitDetailScreen: {
            building: 'Building',

            // Tabbar
            Tabbar_basic_info: 'Basic Info',
            Tabbar_room_info: 'Room Info',
            Tabbar_lease_info: 'Lease Info',

            // BasicInfo
            BasicInfo_unit_type: 'Unit Type',
            BasicInfo_floor_number: 'Floor Number',
            BasicInfo_floor_plan: 'Floor Plan',
            BasicInfo_floor_area: 'Floor Area',

            // RoomInfo
            RoomInfo_room_features: 'Room Features',
            RoomInfo_included_features: 'Included Features',
            RoomInfo_notes_features: 'Notes Features',

            // LeaseInfo
            LeaseInfo_rent_amount: 'Rent Amount',
            LeaseInfo_maintainance_fee: 'Maintainance Fee',
            LeaseInfo_key_money: 'Key Money',
            LeaseInfo_guarantee_money: 'Guarantee Money',
            LeaseInfo_ad: 'AD',
            LeaseInfo_leasing_info: 'Leasing Info',

            // LeasingDetail
            LeasingDetail_lessee_name: 'Lessee Name',
            LeasingDetail_status: 'Status',
            LeasingDetail_contract_start: 'Contract Start',
            LeasingDetail_contract_end: 'Contract End',
            LeasingDetail_termination_date: 'Termination Date',
            LeasingDetail_rent_month: 'Rent/Month',
            LeasingDetail_maint_fee_month: 'Maint Fee/Month',
            LeasingDetail_other_fixed_fees: 'Other fixed fees',
        },


        // ChatMainListScreen
        ChatMainListScreen: {
            chats: 'Chats',

            // Tabbar
            Tabbar_issue_tickets: 'Issue tickets',
            Tabbar_general_chats: 'General chats',

            // IssueTicketItem
            IssueTicketItem_building: 'Building',
            IssueTicketItem_unit: 'Unit',
            IssueTicketItem_category: 'Category',
            IssueTicketItem_event_date: 'Event Date',
            IssueTicketItem_status: 'Status',
            IssueTicketItem_open_discussion: 'Open discussion',
        },


        // IssueDetailScreen
        IssueDetailScreen: {
            issue_tickets: 'Issue tickets',

            // Tabbar
            Tabbar_description: 'Description',
            Tabbar_discussion: 'Discussion',
            Tabbar_documents: 'Documents',

            // DetailInfo
            DetailInfo_building: 'Building',
            DetailInfo_unit: 'Unit',
            DetailInfo_category: 'Category',
            DetailInfo_event_date: 'Event Date',
            DetailInfo_status: 'Status',

            // BottomModal
            BottomModal_add_photos: 'Add photos',
            BottomModal_remove: 'Remove',
            BottomModal_are_you_sure: 'Are you sure want to remove?',
        },


        // CreateNewTicketScreen
        CreateNewTicketScreen: {
            issue_tickets: 'Issue tickets',
            create_a_new_issue_ticket: 'Create a new issue ticket',
            create_new_ticket: 'Create New Ticket',
            a_private_issue_will_only: 'A Private Issue will only be shared to other property managers.',
            public_issue_will_become: 'Public issue will become visible by owner',
            private: 'Private',
            public: 'Public',
            title: 'Title',
            description: 'Description',
            create_ticket: 'Create Ticket',

            // LesseeSearchInput
            LesseeSearchInput_search_list_by_name: 'Search list by name or phone number',
            LesseeSearchInput_no_results_found: 'No Results Found',

            // UploadImage
            UploadImage_photos: 'Photos',

            // AddImageButton
            AddImageButton_add_photo: '+ Add Photo',

            // BuildingSelector
            BuildingSelector_building: 'Building',
            BuildingSelector_select_building: 'Select building',

            // UnitSelector
            UnitSelector_unit: 'Unit',
            UnitSelector_unit_no: 'Unit no.',
            UnitSelector_general: 'General',
            UnitSelector_other: 'Other',

            // CategorySelector
            CategorySelector_category: 'Category',
            CategorySelector_select_category: 'Select category',
            CategorySelector_monthly_report: 'Monthly Report',
            CategorySelector_unpaid_rent: 'Unpaid Rent',
            CategorySelector_moving_out_inspection: 'Moving Out Inspection',
            CategorySelector_leessee_claim: 'Leessee Claim',
            CategorySelector_facility_repair: 'Facility Repair',
            CategorySelector_other: 'Other',

            // OtherCategoryInput
            OtherCategoryInput_other_category: 'Other category',

            // EventDateSelector
            EventDateSelector_event_date: 'Event Date',
            EventDateSelector_select_date: 'Select date',

            // StatusSelector
            StatusSelector_status: 'Status',
            StatusSelector_select_status: 'Select status',
            StatusSelector_open: 'Open',
            StatusSelector_in_progress: 'In Progress',
            StatusSelector_closed: 'Closed',
        },


        // GeneralChatScreen
        GeneralChatScreen: {
            // GeneralChatBackButton
            GeneralChatBackButton_general_chats: 'General chats',
        },


        // ContactScreen
        ContactScreen: {
            general_chats: 'General chats',
            contacts: 'Contacts',
        },


        // NewGroup_SelectUserScreen
        NewGroup_SelectUserScreen: {
            general_chats: 'General chats',
            new_groups: 'New Groups',
        },


        // NewGroup_SubjectScreen
        NewGroup_SubjectScreen: {
            back: 'Back',

            // GroupSubject
            GroupSubject_create_group_subject: 'Create group subject',
            GroupSubject_provide_a_group_subject: 'Provide a group subject and optional group icon',

            // Participants
            Participants_participants: 'Participants',
        },


        // ViewGroupScreen
        ViewGroupScreen: {
            general_chat: 'General chat',

            // Media
            Media_media: 'Media',

            // MuteButton
            MuteButton_mute: 'Mute',

            // Participants
            Participants_participants: 'Participants',
            Participants_invite_participants: 'Invite Participants',

            // ParticipantItem
            ParticipantItem_admin: 'Admin',
        },


        // ReportMainScreen
        ReportMainScreen: {
            reports: 'Reports',

            // Chart
            Chart_yearly_cashflow: 'Yearly Cashflow',

            // ReportItem
            ReportItem_owner: 'Owner',
            ReportItem_period: 'Period',
            ReportItem_status: 'Status',
            ReportItem_income: 'Income',
            ReportItem_expense: 'Expense',
            ReportItem_uncollected_amount: 'Uncollected Amount',
            ReportItem_remitance_amount: 'Remitance Amount',
            ReportItem_done: 'Done',
            ReportItem_creating: 'Creating',
        },


        // ReportDetailScreen
        ReportDetailScreen: {
            reports: 'Reports',

            // RentalIncome
            RentalIncome_rental_income: 'Rental Income',
            RentalIncome_total_rent_income: 'Total Rent Income',
            RentalIncome_total_collected_rent: 'Total Collected Rent',

            // OtherIncome
            OtherIncome_other_income: 'Other Income',
            OtherIncome_total_other_income: 'Total Other Income',

            // Expenses
            Expenses_expenses: 'Expenses',
            Expenses_total_expenses: 'Total Expenses',
            Expenses_managerFees: 'Property Manager Fees',
            Expenses_electricityBills: 'Electricity Bills',
            Expenses_transferFee: 'Transfer Fee',

            // IncomeDetail
            IncomeDetail_last_amount_due: 'Last Amount Due',
            IncomeDetail_this_amount_due: 'This Amount Due',
            IncomeDetail_total_due: 'Total Due',
            IncomeDetail_included_tax: 'Included Tax',
            IncomeDetail_amount_collected: 'Amount Collected',
            IncomeDetail_uncollected_amount: 'Uncollected Amount',
            IncomeDetail_notes: 'Notes',
            IncomeDetail_tax: 'Tax',
            IncomeDetail_total_amount_due: 'Total Amount Due',
            IncomeDetail_settlement_date: 'Settlement Date',
            IncomeDetail_category: 'Category',

            // ReportSummary
            ReportSummary_report_summary: 'Report summary',
            ReportSummary_total_income_due: 'Total Income Due',
            ReportSummary_total_uncollected_income: 'Total Uncollected Income',
            ReportSummary_total_collected_income: 'Total Collected Income',
            ReportSummary_total_expense: 'Total Expense',
            ReportSummary_remittance_amount: 'Remittance Amount',

            // ReportNotes
            ReportNotes_report_notes: 'Report Notes',
        },


        // NotificationScreen
        NotificationScreen: {
            back: 'Back',
            notifications: 'Notifications',
            unread: 'Unread',
            recents: 'Recents',
        },


        // SidebarMenuComp
        SidebarMenuComp: {
            account: 'Account',
            notifications: 'Notifications',
            sign_out: 'Sign Out',

            // Footer
            Footer_about: 'About',
            Footer_contact_us: 'Contact Us',
            Footer_privacy_policy: 'Privacy Policy',
            Footer_app: '© 2019 AssetGenius, All Rights Reserved',
        },


        // SearchBarComp
        SearchBarComp: {
            search: 'Search',
        },


        // ChatComp
        ChatComp: {
            // ChatInput
            ChatInput_write_discussion: 'Write discussion',
            ChatInput_connecting_chat_server: 'Connecting chat server...',

            // ImageUploading
            ImageUploading_uploading: 'Uploading: {{imageName}}',

            // User
            User_writing: 'Writing...',
        },


        // LoadingComp
        LoadingComp: {
            retry: 'Retry',
            server_error: 'Server error',
        },


        // InternetConnectionStatusComp
        InternetConnectionStatusComp: {
            no_internet_connection: 'No Internet Connection',
            connected: 'Connected',
        },


        // BottomOptionModalComp
        BottomOptionModalComp: {
            cancel: 'Cancel',
        },


        // UploadImageModalComp
        UploadImageModalComp: {
            take_photo: 'Take photo',
            choose_photo: 'Choose photo',
        },


        // Toast
        Toast: {
            maximum_upload_file_5mb: 'Maximum upload file size is 5 MB',
            creating_new_room: 'Creating new room',
            create_room_failed: 'Create room failed',
            removing_room: 'Removing room',
            removing_user: 'Removing user',
            remove_failed: 'Remove failed',
            the_message_failed_to_send: 'The message failed to send',
            the_file_upload_failed: 'The file {{fileName}} upload failed',
            creating_comment: 'Creating comment',
            create_comment_failed: 'Create coment failed',
            uploading_image: 'Uploading image',
            upload_image_failed: 'Upload image failed',
            removing_issue: 'Removing issue',
            remove_issue_failed: 'Remove issue failed',
            compressing_image: 'Compressing image',
            compress_image_failed: 'Compress image failed',
        },


        // GlobalService
        GlobalService: {
            log_out: 'Log Out',
            logging_out_will_not_allow_you: 'Logging out will not allow you to receive push notifications. Are you sure do you want to log out?',
            your_session_has_expired: 'Your session has expired. Please login',
            cancel: 'Cancel',
            ok: 'OK',
        },


        // Api
        Api: {
            there_is_no_internet_connection: 'There is no Internet connection',
        },
    },
};
