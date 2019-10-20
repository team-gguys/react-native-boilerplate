export default {
    translation: {
        // LoginScreen
        LoginScreen: {
            welcome_back: 'Welcome back!',
            email_or_phone_number: 'メーリアドレスまたは電話番号',
            name_placeholder: '例）sample@sample.com',
            password_placeholder: 'パスワードを入力',
            log_in: 'ログイン',
            the_input_is_not_valid: 'The input is not valid E-mail!',
            please_input_your_password: 'Please input your password',
            the_email_address_incorrect: 'The e-mail address or password you entered was incorrect!',
        },


        // BuildingListScreen
        BuildingListScreen: {
            buildings: '建物',
            search_buildings_by_name: '名前、オーナー、または住所で建物を検索',

            // BuildingItem
            BuildingItem_owner: 'オーナー',
            BuildingItem_rented: '入居中',
            BuildingItem_empty: '空室',
        },


        // BuildingDetailScreen
        BuildingDetailScreen: {
            buildings: '建物',

            // DetailInfo
            DetailInfo_owner: 'オーナー',
            DetailInfo_total_units: '件数',
            DetailInfo_rented_units: '入居中',
            DetailInfo_empty_units: '空室',

            // Tabbar
            Tabbar_extra_info: '建物情報',
            Tabbar_units: 'ユニット',
            Tabbar_documents: '書類等',

            // UnitDetail
            UnitDetail_floor_plan: '間取り',
            UnitDetail_total_rent: '賃料',
            UnitDetail_contract_period: '契約期間',

            // ExtraInfo
            ExtraInfo_transportation: 'Transportation',
            ExtraInfo_build_year: '築年',
            ExtraInfo_construction: 'Construction',
            ExtraInfo_number_of_floor: '階数',
            ExtraInfo_land_area: 'Land Area',
            ExtraInfo_building_area: 'Building Area',
            ExtraInfo_elevator: 'Elevator',
            ExtraInfo_parking: 'Parking',
            ExtraInfo_bicycle_parking: 'Bicycle Parking',
            ExtraInfo_auto_lock: 'Auto Lock',
        },


        // UnitDetailScreen
        UnitDetailScreen: {
            building: '建物名',

            // Tabbar
            Tabbar_basic_info: '基本情報',
            Tabbar_room_info: '部屋情報',
            Tabbar_lease_info: '契約者履歴',

            // BasicInfo
            BasicInfo_unit_type: 'ユニットタイプ',
            BasicInfo_floor_number: '階数',
            BasicInfo_floor_plan: '間取り',
            BasicInfo_floor_area: '床面積',

            // RoomInfo
            RoomInfo_room_features: '部屋の設備',
            RoomInfo_included_features: '家具リスト',
            RoomInfo_notes_features: '備考',

            // LeaseInfo
            LeaseInfo_rent_amount: '掲載予定家賃',
            LeaseInfo_maintainance_fee: '掲載予定管理費',
            LeaseInfo_key_money: '掲載予定礼金',
            LeaseInfo_guarantee_money: '掲載予定敷金',
            LeaseInfo_ad: '掲載予定AD	',
            LeaseInfo_leasing_info: '契約者履歴',

            // LeasingDetail
            LeasingDetail_lessee_name: '契約者名',
            LeasingDetail_status: 'ステータス',
            LeasingDetail_contract_start: '契約開始日',
            LeasingDetail_contract_end: '契約終了日',
            LeasingDetail_termination_date: '解約日',
            LeasingDetail_rent_month: '賃料',
            LeasingDetail_maint_fee_month: '管理費',
            LeasingDetail_other_fixed_fees: '固定料金一覧',
        },


        // ChatMainListScreen
        ChatMainListScreen: {
            chats: 'チャット',

            // Tabbar
            Tabbar_issue_tickets: '対応リスト',
            Tabbar_general_chats: '一般チャット',

            // IssueTicketItem
            IssueTicketItem_building: '建物名',
            IssueTicketItem_unit: 'ユニット',
            IssueTicketItem_category: 'カテゴリー',
            IssueTicketItem_event_date: '日付',
            IssueTicketItem_status: 'ステータス',
            IssueTicketItem_open_discussion: '詳細',
        },


        // IssueDetailScreen
        IssueDetailScreen: {
            issue_tickets: '対応リスト',

            // Tabbar
            Tabbar_description: '概要',
            Tabbar_discussion: 'コメント',
            Tabbar_documents: '見積書など',

            // DetailInfo
            DetailInfo_building: '建物名',
            DetailInfo_unit: 'ユニット',
            DetailInfo_category: 'カテゴリー',
            DetailInfo_event_date: '日付',
            DetailInfo_status: 'ステータス',

            // BottomModal
            BottomModal_add_photos: '画像を登録',
            BottomModal_remove: '削 除',
            BottomModal_are_you_sure: '一度削除すると復元することができません。削除してもよろしいですか？',
        },


        // CreateNewTicketScreen
        CreateNewTicketScreen: {
            issue_tickets: '対応リスト',
            create_a_new_issue_ticket: '新しい対応案件を作成する',
            create_new_ticket: '新しい対応案件を作成する',
            a_private_issue_will_only: 'A Private Issue will only be shared to other property managers.',
            public_issue_will_become: '「非公開」にすると、管理会社のみ見ることができます',
            private: '非公開',
            public: '公開',
            title: '件名',
            description: '内容',
            create_ticket: '保 存',

            // LesseeSearchInput
            LesseeSearchInput_search_list_by_name: '電話番号・契約者名で検索',
            LesseeSearchInput_no_results_found: 'データがありません',

            // UploadImage
            UploadImage_photos: '画像',

            // AddImageButton
            AddImageButton_add_photo: '画像を登録',

            // BuildingSelector
            BuildingSelector_building: '建物を選択',
            BuildingSelector_select_building: '建物名',

            // UnitSelector
            UnitSelector_unit: 'ユニット',
            UnitSelector_unit_no: 'ユニット',
            UnitSelector_general: '建物全般',
            UnitSelector_other: 'その他',

            // CategorySelector
            CategorySelector_category: 'カテゴリー',
            CategorySelector_select_category: 'カテゴリー',
            CategorySelector_monthly_report: '報告書',
            CategorySelector_unpaid_rent: '滞納確認',
            CategorySelector_moving_out_inspection: '退去立会',
            CategorySelector_leessee_claim: '契約者クレーム',
            CategorySelector_facility_repair: '修繕工事',
            CategorySelector_other: 'その他',

            // OtherCategoryInput
            OtherCategoryInput_other_category: 'Other category',

            // EventDateSelector
            EventDateSelector_event_date: '日付',
            EventDateSelector_select_date: '日付',

            // StatusSelector
            StatusSelector_status: 'ステータス',
            StatusSelector_select_status: 'ステータス',
            StatusSelector_open: '未対応',
            StatusSelector_in_progress: '対応中',
            StatusSelector_closed: '完了',
        },


        // GeneralChatScreen
        GeneralChatScreen: {
            // GeneralChatBackButton
            GeneralChatBackButton_general_chats: '一般チャット',
        },


        // ContactScreen
        ContactScreen: {
            general_chats: '一般チャット',
            contacts: '連絡先',
        },


        // NewGroup_SelectUserScreen
        NewGroup_SelectUserScreen: {
            general_chats: '一般チャット',
            new_groups: '新規グループ',
        },


        // SidebarMenuComp
        SidebarMenuComp: {
            account: 'アカウント設定',
            notifications: 'ジーニアス通知',
            sign_out: 'ログアウト',

            // Footer
            Footer_about: '会社概要',
            Footer_contact_us: 'お問い合わせ',
            Footer_privacy_policy: 'プライバシーポリシー',
            Footer_app: '© 2019 AssetGenius, All Rights Reserved',
        },


        // NewGroup_SubjectScreen
        NewGroup_SubjectScreen: {
            back: '戻る',

            // GroupSubject
            GroupSubject_create_group_subject: 'グループ名',
            GroupSubject_provide_a_group_subject: 'グループ名とオプションのグループアイコンを作成してください',

            // Participants
            Participants_participants: '参加者',
        },


        // ViewGroupScreen
        ViewGroupScreen: {
            general_chat: '一般チャット',

            // Media
            Media_media: 'メディア',

            // MuteButton
            MuteButton_mute: '消音',

            // Participants
            Participants_participants: '参加者',
            Participants_invite_participants: '参加者を追加',

            // ParticipantItem
            ParticipantItem_admin: '管理者',
        },


        // ReportMainScreen
        ReportMainScreen: {
            reports: '建物別送金明細書一覧',

            // Chart
            Chart_yearly_cashflow: '年間キャッシュフロー',

            // ReportItem
            ReportItem_owner: 'オーナー',
            ReportItem_period: '対象月',
            ReportItem_status: 'ステータス',
            ReportItem_income: '請求額',
            ReportItem_expense: '支出額',
            ReportItem_uncollected_amount: '滞納額',
            ReportItem_remitance_amount: '送金額',
            ReportItem_done: '完成',
            ReportItem_creating: '編集中',
        },


        // ReportDetailScreen
        ReportDetailScreen: {
            reports: '送金明細書',

            // RentalIncome
            RentalIncome_rental_income: '家賃収入',
            RentalIncome_total_rent_income: '合計(請求額)',
            RentalIncome_total_collected_rent: '合計(入金額)',

            // OtherIncome
            OtherIncome_other_income: 'その他の収入（家賃以外）',
            OtherIncome_total_other_income: '合計(その他の収入)',

            // Expenses
            Expenses_expenses: '支出',
            Expenses_total_expenses: '合計(出費)',
            Expenses_managerFees: '管理委託手数料',
            Expenses_electricityBills: '電気代',
            Expenses_transferFee: '振込手数料',

            // IncomeDetail
            IncomeDetail_last_amount_due: '先月までの滞納額',
            IncomeDetail_this_amount_due: '金額',
            IncomeDetail_total_due: '請求額',
            IncomeDetail_included_tax: '内消費税',
            IncomeDetail_amount_collected: '入金額',
            IncomeDetail_uncollected_amount: '当月の滞納額',
            IncomeDetail_notes: '備考',
            IncomeDetail_tax: '消費税',
            IncomeDetail_total_amount_due: '合計',
            IncomeDetail_settlement_date: '日付け',
            IncomeDetail_category: '種別',

            // ReportSummary
            ReportSummary_report_summary: '合計',
            ReportSummary_total_income_due: '入金予定額',
            ReportSummary_total_uncollected_income: '滞納額',
            ReportSummary_total_collected_income: '入金額',
            ReportSummary_total_expense: '支出',
            ReportSummary_remittance_amount: '送金額',

            // ReportNotes
            ReportNotes_report_notes: '備考',
        },


        // NotificationScreen
        NotificationScreen: {
            back: '戻る',
            notifications: '通知',
            unread: '未読',
            recents: '最近',
        },


        // SearchBarComp
        SearchBarComp: {
            search: '検索',
        },


        // ChatComp
        ChatComp: {
            // ChatInput
            ChatInput_write_discussion: 'コメントを書く',
            ChatInput_connecting_chat_server: 'チャットサーバーに接続しています...',

            // ImageUploading
            ImageUploading_uploading: 'アップロード中: {{imageName}}',

            // User
            User_writing: 'Writing...',
        },


        // LoadingComp
        LoadingComp: {
            retry: '再試行',
            server_error: 'Server error',
        },


        // InternetConnectionStatusComp
        InternetConnectionStatusComp: {
            no_internet_connection: 'インターネット接続がありません',
            connected: '接続されました！',
        },


        // BottomOptionModalComp
        BottomOptionModalComp: {
            cancel: 'キャンセル',
        },


        // UploadImageModalComp
        UploadImageModalComp: {
            take_photo: '写真を撮る',
            choose_photo: '画像を選ぶ',
        },


        // Toast
        Toast: {
            maximum_upload_file_5mb: 'Maximum upload file size is 5 MB',
            creating_new_room: 'チャットルームを作成中',
            create_room_failed: 'チャットルームの作成が失敗しました',
            removing_room: 'チャットルームを削除',
            removing_user: '参加者を削除',
            remove_failed: '削除が失敗しました',
            the_message_failed_to_send: 'メッセージ送信が失敗しました',
            the_file_upload_failed: '{{fileName}}のアップロードが失敗しました',
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
            log_out: 'ログアウト',
            logging_out_will_not_allow_you: 'Logging out will not allow you to receive push notifications. Are you sure do you want to log out?',
            your_session_has_expired: 'Your session has expired. Please login',
            cancel: 'キャンセル',
            ok: 'OK',
        },


        // Api
        Api: {
            there_is_no_internet_connection: 'インターネット接続がありません',
        },
    },
};
