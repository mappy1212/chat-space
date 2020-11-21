

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
has_many :messages
has_many :users_groups
has_many :groups, thorough: :users_groups


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|user_id|integer|null: false , foreign_key: true|
|group_id|integer|null: false , foreign_key: true|
### Association
belongs_to :user
belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|string|null: false|
### Association
has_many :massages
has_many :users_groups
has_many :users, through: :users_groups


## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
### Association
belongs_to :user
belongs_to :group

