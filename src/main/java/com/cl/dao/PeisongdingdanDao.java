package com.cl.dao;

import com.cl.entity.PeisongdingdanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.PeisongdingdanView;


/**
 * 配送订单
 * 
 * @author 
 * @email 
 * @date 2024-03-30 10:32:13
 */
public interface PeisongdingdanDao extends BaseMapper<PeisongdingdanEntity> {
	
	List<PeisongdingdanView> selectListView(@Param("ew") Wrapper<PeisongdingdanEntity> wrapper);

	List<PeisongdingdanView> selectListView(Pagination page,@Param("ew") Wrapper<PeisongdingdanEntity> wrapper);
	
	PeisongdingdanView selectView(@Param("ew") Wrapper<PeisongdingdanEntity> wrapper);
	

}
