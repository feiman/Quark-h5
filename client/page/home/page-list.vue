<template>
  <div class="clearfix my-page-list">
    <div class="my-page-nav-list">
      <div class="my-page-nav-item">我的作品({{}})</div>
      <div class="my-page-nav-item">参与作品({{}})</div>
    </div>

    <ul class="page-item-wrapper">
      <li class="page-item create">
        <div class="temp-create">
          <i class="el-icon-plus"></i>
          <p class="paddingT10">创建H5</p>
        </div>
        <div class="null-create">空白创建</div>
      </li>
      <li class="page-item">
        <span class="unpublish">未发布</span>
        <div class="header-mask">
          <div class="details-btn">预览</div>
        </div>
        <div class="cover">
          <img alt />
        </div>
        <div class="page-item-title border-T">
          <span class="item-title-i"></span>
        </div>
        <div class="page-item-data-pv border-T">
          <div class="btn-wrapper">
            <el-button type="text" size="mini">编辑</el-button>
          </div>
          <div class="btn-wrapper">
            <el-button type="text" size="mini">复制</el-button>
          </div>
          <div class="btn-wrapper">
            <el-dropdown placement="top-start">
              <span class="el-dropdown-link">
                <el-button type="text" size="mini">
                  更多
                  <i class="el-icon-more-outline"></i>
                </el-button>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div>发布</div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div>复制为模板</div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div>页面数据</div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div>添加成员</div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div>删除</div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div>移出我的参与</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  created(){
    this.getPageList();
  },
  methods:{
    // 获取所有页面
    getPageList(){
      this.$ax
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: "#ff3040";
.my-page-list {
}

.my-page-nav-list {
  height: 40px;
  line-height: 40px;
  z-index: 2;
  margin-bottom: 20px;
  .my-page-nav-item {
    float: left;
    padding-right: 32px;
    text-align: center;
    cursor: pointer;
    &.active {
      color: $primary;
    }
    &:hover {
      color: $primary;
    }
  }
}

.page-item {
  width: 224px;
  height: 296px;
  border-radius: 4px;
  overflow: hidden;
  float: left;
  margin-bottom: 24px;
  background: white;
  position: relative;
  transition: all 0.28s;
  &:hover {
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);
    transform: translate3d(0, -2px, 0);
    .header-mask {
      opacity: 1;
    }
  }
  .unpublish {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 12px;
    display: block;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    background-color: #76838f;
    color: #fff;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 12px;
    z-index: 10;
  }
  .header-mask {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 224px;
    height: 224px;
    border-radius: 4px 4px 0 0;
    padding-top: 92px;
    text-align: center;
    transition: top 0.28s ease, opacity 0.28s ease, height 0.28s ease;
    .details-btn {
      display: inline-block;
      width: 120px;
      height: 44px;
      font-size: 18px;
      line-height: 44px;
      border-radius: 22px;
      border: 1px solid #fff;
      color: #fff;
      cursor: pointer;
    }
  }
  .cover {
    width: 224px;
    height: 224px;
    background-size: cover;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      display: inline-block;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .page-item-title {
    .item-title-i {
      display: inline-block;
      width: 85%;
      font-size: 14px;
      height: 36px;
      line-height: 36px;
      color: #111;
      transition: transform 0.2s ease;
      background-color: #fff;
      padding: 0 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left;
    }
  }
  .page-item-data-pv {
    width: 100%;
    display: flex;
    .btn-wrapper {
      flex: 1;
      text-align: center;
    }
  }
}

.page-item:not(:nth-child(4n + 1)) {
  margin-left: calc((100% - 224px * 4) / 3);
}

.page-item.create {
  padding: 16px;
  text-align: center;
  .temp-create {
    display: inline-block;
    width: 192px;
    height: 204px;
    border: 1px solid #e6ebed;
    border-radius: 3px;
    margin-bottom: 18px;
    padding-top: 70px;
    transition: all 0.28s;
    cursor: pointer;
    &:hover {
      color: $primary;
      border-color: $primary;
    }
  }
  .null-create {
    display: inline-block;
    width: 192px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #e6ebed;
    transition: all 0.28s;
    cursor: pointer;
    &:hover {
      color: $primary;
      border-color: $primary;
    }
  }
}

.full-input-w {
  width: 100%;
}
</style>
