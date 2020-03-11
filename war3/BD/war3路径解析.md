# War3路径解析
---
>搞懂这个那么你距离魔改大神不远了,资料收集于网络个人整理！
## 待排版
```
关于SLK加密修改的一些注释。希望对新人有点帮助！
解压出来的数据 
CampaignUnitFunc.txt                【运行单位函数】
CampaignUnitStrings.txt             【运动单位字符串】
CommonAbilityFunc.txt               【公共技能函数】
CommonAbilityStrings.txt            【公共技能字符串】
HumanAbilityFunc.txt                【人族技能函数】
HumanAbilityStrings.txt             【人族技能字符串】
HumanUnitFunc.txt                   【人族单位函数】
HumanUnitStrings.txt                【人族单位字符串】
HumanUpgradeFunc.txt                【人族升级函数】
HumanUpgradeStrings.txt             【人族升级字符串】
ItemAbilityFunc.txt                 【物品技能函数】
ItemAbilityStrings.txt              【物品技能字符串】
ItemFunc.txt                        【物品函数】
ItemStrings.txt                     【物品字符串】
NeutralAbilityFunc.txt              【中立技能函数】
NeutralAbilityStrings.txt           【中立技能字符串】
NeutralUnitFunc.txt                 【中立单位函数】
NeutralUnitStrings.txt              【中立单位字符串】
NeutralUpgradeFunc.txt              【中立升级函数】
NeutralUpgradeStrings.txt           【中立升级字符串】
NightElfAbilityFunc.txt             【暗夜技能函数】
NightElfAbilityStrings.txt          【暗夜技能字符串】
NightElfUnitFunc.txt                【暗夜单位函数】
NightElfUnitStrings.txt             【暗夜单位字符串】
NightElfUpgradeFunc.txt             【暗夜升级函数】
NightElfUpgradeStrings.txt          【暗夜升级字符串】
OrcAbilityFunc.txt                  【兽族技能函数】
OrcAbilityStrings.txt               【兽族技能字符串】
OrcUnitFunc.txt                     【兽族单位函数】
OrcUnitStrings.txt                  【兽族单位字符串】
OrcUpgradeFunc.txt                  【兽族升级函数】
OrcUpgradeStrings.txt               【兽族升级字符串】
UndeadAbilityFunc.txt               【不死族技能函数】
UndeadAbilityStrings.txt            【不死族技能字符串】
UndeadUnitFunc.txt                  【不死族单位函数】
UndeadUnitStrings.txt               【不死族单位字符串】
UndeadUpgradeFunc.txt               【不死族升级函数】
UndeadUpgradeStrings.txt            【不死族升级字符串】




常用slk数据文件
    ItemData.slk                        【物品数据】
    UnitAbilities.slk                   【单位技能】（包含技能名称）
    UnitBalance.slk                     【单位定义】
    UnitData.slk                        【单位数据】
    unitUI.slk                          【单位外观】
    UnitWeapons.slk                     【单位武器定义】攻击
    UpgradeData.slk                     【升级数据】
    war3mapmisc.txt                     【游戏平衡常数】
    DestructableData.slk                【地面附属建筑物的数据】
    AbilityData.slk                     【技能数据-保存技能的设定值】


Units/ 目录下10个文件，              定义了最重要的一些属性。
Units/AbilityData.slk               能力属性
Units/DestructableData.slk          地面附属建筑物的数据
Units/ItemData.slk                  物品属性
Units/UnitAbilities.slk             单位能力
Units/UnitBalance.slk               单位定义
Units/UnitData.slk                  单位数据
Units/UnitMetaData.slk              单位素材数据
Units/unitUI.slk                    定义单位的外观
Units/UnitWeapons.slk               单位武器定义
Units/UpgradeData.slk               升级数据
Units/DestructableData.slk          可以破坏的(比如门等)数据



Splats/LightningData.slk            闪电的数据 闪电链？
Doodads/Doodads.slk                 定义了WC3中地面附属物的属性
Splats/T_SplatData.slk              间隔数据
Splats/UberSplatData.slk            这个文件定义了一些特殊效果的贴图和时间，例如人类建筑开始中间，回城卷轴的效果等。
TerrainArt/CliffTypes.slk           定义了悬崖的属性
TerrainArt/Terrain.slk              定义了地形的属性
TerrainArt/Water.slk                定义水的属性
TerrainArt/Weather.slk              定义天气的属性
UI/SoundInfo                        目录下共12个文件定义了声音的属性
UI/SoundInfo/AbilitySounds.slk      定义一些能力的声音

下面这些文件的结构同AbilitySounds.slk的一样。
UI/SoundInfo/AmbienceSounds.slk     环境的声音
UI/SoundInfo/AnimSounds.slk         动作的声音
UI/SoundInfo/UISounds.slk           游戏提示的声音
UI/SoundInfo/UnitAckSounds.slk      单位攻击的声音
UI/SoundInfo/UnitCombatSounds.slk   单位战斗的声音
UI/SoundInfo/AnimLookups.slk        定义查找的关联，这种方法我在工作中常用，没想到暴雪也用。
UI/SoundInfo/DialogSounds.slk       对话框声音
UI/SoundInfo/EAXDefs.slk            EAX的定义
UI/SoundInfo/EnvironmentSounds.slk  环境声音，如森林、草地、湖的声音。
UI/SoundInfo/PortraitAnims.slk      单位的说话声，如兽族农民说的"OK"。
UI/SoundInfo/MIDISounds.slk         MIDI声音列表

>移植地图

地形类|||
-|-|-|
路径|说明
war3map.doo|WE中可破坏和地形装饰物物件的放置情形 
war3map.w3e|地形纹理资料
war3map.shd|地形层面资料|(w3e,shd,doo是移植地形必备的)
war3map.mmp|物件 具体不明|测试不复制也不影响
war3map.w3c|WE中摄影机的放置情形
war3map.w3r|WE中区域的放置情形|(游戏所需资料会被转成JASS放在war3map.j，因此删掉不影响游戏) 
war3map.doo|WE中可破坏和地形装饰物物件的放置情形 
war3mapUnits.doo|WE中单位的放置情形|(游戏所需资料会被转成JASS放在war3map.j，因此删掉不影响游戏) 
war3map.w3b|可破坏的
war3map.w3d|地形装饰物


物体类|||
-|-|-|
war3map.w3a|技能资料(物编) 
war3map.w3h|记录Buff（魔法效果）资料(物编) 
war3map.w3q|记录科技资料(物编) 
war3map.w3t|记录物品资料(物编) 
war3map.w3u|记录单位资料(物编) 

触发类||
-|-|
war3map.wtg|记录WE中触发编辑器中的内容|都要
war3map.wct|记录WE中已转换成JASS的触发资料|都要
>以上二个档案是WE中的触发资料，游戏要用的触发会被转成JASS放在war3map.j，因此删掉这两个文件的地图还是可以玩。如果缺少这两个资料，用WE读地图就会出错。一般加密会把这两个删除，因此地图一但加密，就几乎没办法百分之百还原成原始的资料。




war3map.wts                         记录字串资料。触发编辑器、物件编辑器等的文字资料都会被存放在这里。如果要中文化一张加密的地图，只须修改此档案再汇回原地图即可
war3map.j                           JASS数据库  此档案移到Scripts\war3map.j也可以用，有些加密程式会把此档案移到该处而让不知道路径的人找不到它
war3map.w3i                         记录游戏一开始资讯(名称、几打几、简介、作者...)、种族设定、玩家设定
war3map.shd                         地层数据
war3map.wpm                         mp3 wav等媒体文件的设置
war3map.w3s                         记录声音编辑器(Sound Editor)的资料
war3mappreview.tga                  预览图片
war3map.blp                         游戏中显示的小地图图片
war3map.txt                         游戏平衡性常数
war3map.imp                         记录导入地图中的资料。加密程式通常会把它删掉使解密者不容易找到它们额外汇入的模组和图片
war3mapSkin.txt                     记录Game Interface(游戏界面)的资料

直接用文本形式打开 
针对以下这个相对应的做修改 
MaxUnitLevel=100 单位最大等级 
UpgradeRefundRate=1.0 取消建筑升级偿还率 
ConstructionRefundRate=1.0 取消建筑建造尝坏率 
DamageBonusSiege=1.00,0.50,1.00,1.50,1.00,0.50,0.15,1.50 攻城 -------- 
DamageBonusNormal=1.00,1.50,1.00,0.70,1.00,1.00,0.15,1.00 普通 - 
DamageBonusPierce=2.00,0.75,1.00,0.35,1.00,0.50,0.15,1.50 穿刺 =[装甲类型排列循序为] 
DamageBonusSpells=1.00,1.00,1.00,1.00,1.00,0.75,0.15,1.00 法术 =[轻型，中形，重型，加强，普通，英雄，神圣，无装甲] 
DamageBonusMagic=1.25,0.75,2.00,0.35,1.00,0.50,0.15,1.00 魔法 - 
EtherealDamageBonus=0.00,0.00,0.00,1.66,0.00,1.66,0.00 虚无奖励 - 
DamageBonusHero=1.00,1.00,1.00,0.50,1.00,1.00,0.15,1.00 英雄 ------- 
CallForHelp=1000.0 呼叫帮助范围 
CreepCallForHelp=1000.0 呼叫帮助范围，中立 
ChanceToMiss=0.33 低对高失误几率 
DefenseArmor=0.03 装甲伤害减少参数 
PickupItemRange=250.0 拾起物品范围 
DropItemRange=150.0 掉落物品范围 
GiveItemRange=250.0 给予物品范围 
PawnItemRate=0.8 物品贩卖价格比 
PawnItemRange=1500.0 贩卖物品范围 
MaxUnitSpeed=522.0 单位速度最大 
MinUnitSpeed=1.0 单位速度最小 
MaxBldgSpeed=522.0 建筑速度最大 
MinBldgSpeed=1.0 建筑速度最小 
TradingIncLarge=10000 控制点击（CTRL+左键）增加资源量（联盟交易资源） 
TradingIncSmall=1000 普通点击（联盟交易资源） 
UpkeepGoldTax=0.00,0.00,0.30,0.60,0.60,0.60,0.60,0.60,0.60,0.60 黄金维修费 
SummonedKillFactor=1.0 英雄EXP取得——英雄-上一个值因素 
GrantHeroXPFormulaC=0.0 英雄EXP取得——英雄-固定因素 
GrantHeroXPFormulaB=9.0 英雄EXP取得——英雄-等级因素 
GrantHeroXP=40 英雄EXP取得——英雄-表格 
NeedHeroXPFormulaA=1.04 英雄EXP要求——上一个值因素 
NeedHeroXPFormulaB=200.0 英雄EXP要求——列表 
StrRegenBonus=0.15 每点力量生命恢复奖励 
StrHitPointBonus=75.0 每点力量生命值奖励 
StrAttackBonus=3.0 每点主要属性攻击力奖励 
AgiMoveBonus=0.1 每点敏捷移动速度奖励 
AgiDefenseBonus=0.3 每点敏捷防御奖励 
IntManaBonus=100.0 每点智力魔法值奖励 
AgiDefenseBase=0.0 防御基础值（敏捷奖励之前） 
IntRegenBonus=0.03 每点智力魔法恢复奖励 
AgiAttackSpeedBonus=0.01 每点敏捷攻击速度奖励 
HeroExpRange=100000.0 英雄EXP最大取得范围 
MaxHeroLevel=1000 英雄最大等级 
BuildingKillsGiveExp=1 建筑物杀死单位是否给予经验值（0是假，1是真） 
MaxLevelHeroesDrainExp=0 最高等级英雄是否消耗经验值（0是假，1是真） 
HeroFactorXP=100 中立生物经验参数 
GrantNormalXPFormulaC=0.0 英雄EXP获取——普通-固定因素 
GrantNormalXPForm
ulaB=4.0 英雄EXP获取——普通-等级因素 
GrantNormalXP=15 英雄EXP获取——普通-表格 
FoodCeiling=300 人口限制 
FrostAttackSpeedDecrease=0.2 冰冻 攻击速度降低 
FrostMoveSpeedDecrease=0.4 冰冻 移动速度降低 
A087,A022,A085,A083,A08I

```

!>看样子好像不排也行直接文本显示 可怜我排了几个表格样式

![](jgz.png)